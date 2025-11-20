import Decimal from "https://unpkg.com/decimal.js@latest/decimal.mjs";

const MaxNumber = 16;

function isOverMaxNumber(numberValue) {
  const str = Decimal.isDecimal()
    ? numberValue.toString()
    : String(numberValue);
  const digits = str.replace(/\./g, "");
  return digits.length > MaxNumber;
}

function activeName(prev) {
  return prev.phase === "EnteringA" ? "operandA" : "operandB";
}

function getActive(prev) {
  return activeName(prev) === "operandA" ? prev.operandA : prev.operandB;
}

function setActive(value, prev) {
  return activeName(prev) === "operandA"
    ? { ...prev, operandA: value }
    : { ...prev, operandB: value };
}

function refreshSubDisplay(withEqual, prev) {
  if (withEqual === undefined) {
    withEqual = false;
  }

  const oprdA = prev.operandA;
  const oprdB = prev.operandB;
  const op = prev.operator;

  if (op === null) {
    return { ...prev, SDvalue: "" };
  }

  const left = oprdA === "" ? "0" : oprdA;
  const right = oprdB === "" ? (withEqual ? left : "0") : oprdB;

  if (withEqual) {
    return { ...prev, SDvalue: `${left} ${op} ${right} =` };
  } else {
    return { ...prev, SDvalue: `${left} ${op}` };
  }
}

export function HandleNumberClick(num, prev) {
  if (prev.phase === "ResultShown") {
    prev = {
      ...prev,
      operandA: "",
      operandB: "",
      operator: null,
      phase: "EnteringA",
      SDvalue: "",
    };
  }

  let getOperand = getActive(prev);

  if (getOperand === "" || getOperand === "0") {
    getOperand = String(num);
  } else {
    getOperand = String(getOperand) + String(num);
  }

  if (isOverMaxNumber(getOperand)) {
    return { ...prev };
  }

  prev = setActive(getOperand, prev);
  prev = refreshSubDisplay(false, prev);

  return {
    ...prev,
    MDvalue: getOperand,
  };
}

export function HandlePointClick(prev) {
  if (prev.phase === "ResultShown") {
    prev = {
      ...prev,
      operandA: "0",
      operandB: "",
      operator: null,
      phase: "EnteringA",
      SDvalue: "",
    };
  }

  let getOperand = getActive(prev);

  if (getOperand.includes(".")) {
    return { ...prev };
  } else if (getOperand === "" || getOperand === undefined) {
    getOperand = `0.`;
  } else {
    getOperand = `${getOperand}.`;
  }

  prev = setActive(getOperand, prev);
  prev = refreshSubDisplay(false, prev);

  return {
    ...prev,
    MDvalue: getOperand,
  };
}

export function HandleOperatorClick(op, prev) {}

export function HandleEqualClick(prev) {}

export function HandleBackspaceClick(prev) {}

export function HandleClearEntryClick(prev) {}

export function HandleClearAllClick(prev) {}
