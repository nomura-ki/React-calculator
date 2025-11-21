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

export function HandleOperatorClick(op, prev) {
  if (prev.operandA === "") {
    prev = { ...prev, operandA: "0" };
  }

  let getOperand = getActive(prev);
  while (getOperand.endsWith("0") && getOperand.includes(".")) {
    getOperand = getOperand.slice(0, -1);
    prev = setActive(getOperand, prev);
  }

  if (getOperand.endsWith(".")) {
    getOperand = getOperand.slice(0, -1);
    prev = setActive(getOperand, prev);
  }

  if (prev.phase === "ResultShown") {
    prev = {
      ...prev,
      phase: "EnteringB",
      operator: op,
      operandB: "",
      MDvalue: prev.OperandA,
    };
    prev = refreshSubDisplay(false, prev);

    return { ...prev };
  }

  if (prev.phase === "EnteringB" && prev.operandB === "") {
    prev = { ...prev, operator: op };
    prev = refreshSubDisplay(false, prev);
    return { ...prev };
  } else if (prev.phase === "EnteringB") {
    const oldOp = prev.operator;
    const oprdA = prev.operandA || "0";
    const oprdB = prev.operandB || "0";

    const A = new Decimal(oprdA);
    const B = new Decimal(oprdB);

    if (oldOp === "÷" && B.eq(0)) {
      return {
        ...prev,
        operandA: "0",
        operandB: "",
        operator: null,
        MDvalue: "0で割ることはできません！",
        SDvalue: "",
        phase: "ResultShown",
      };
    }

    let calc = 0;
    switch (oldOp) {
      case "+":
        calc = A.plus(B);
        break;

      case "－":
        calc = A.minus(B);
        break;

      case "×":
        calc = A.times(B);
        break;

      case "÷":
        calc = A.div(B);
        break;

      default:
        return;
    }

    const dispCalc = isOverMaxNumber(calc)
      ? calc.toExponential()
      : calc.toString();

    prev = {
      ...prev,
      operandA: dispCalc,
      operandB: "",
      operator: op,
      phase: "EnteringB",
      MDvalue: dispCalc,
    };
    prev = refreshSubDisplay(false, prev);

    return { ...prev };
  }

  prev = {
    ...prev,
    operator: op,
    phase: "EnteringB",
    operandB: "",
    MDvalue: prev.operandA,
  };
  prev = refreshSubDisplay(false, prev);

  return { ...prev };
}

export function HandleEqualClick(prev) {
  let getOperand = getActive(prev);
  while (getOperand.endsWith("0") && getOperand.includes(".")) {
    getOperand = getOperand.slice(0, -1);
    setActive(getOperand, prev);
  }

  if (getOperand.endsWith(".")) {
    getOperand = getOperand.slice(0, -1);
    setActive(getOperand, prev);
  }

  const op = prev.operator;
  const oprdA = prev.operandA || "0";
  const oprdB = prev.operandB || (prev.phase === "EnteringB" ? oprdA : "");

  if (op === null || op === undefined) {
    return { ...prev };
  }

  const A = new Decimal(oprdA);
  const B = new Decimal(oprdB === "" ? "0" : oprdB);

  if (op === "÷" && B.eq(0)) {
    return {
      ...prev,
      operandA: "0",
      operandB: "",
      operator: null,
      MDvalue: "0で割ることはできません！",
      SDvalue: "",
      phase: "ResultShown",
    };
  }

  let calc = 0;
  switch (op) {
    case "+":
      calc = A.plus(B);
      break;

    case "－":
      calc = A.minus(B);
      break;

    case "×":
      calc = A.times(B);
      break;

    case "÷":
      calc = A.div(B);
      break;

    default:
      return;
  }

  const dispCalc = isOverMaxNumber(calc)
    ? calc.toExponential()
    : calc.toString();

  prev = refreshSubDisplay(true, prev);

  prev = {
    ...prev,
    operandA: String(dispCalc),
    operandB: "",
    operator: null,
    phase: "ResultShown",
    MDvalue: dispCalc,
  };

  return { ...prev };
}

export function HandleBackspaceClick(prev) {
  if (prev.phase === "EnteringB" && prev.operandB === "") return;

  let calc = String(getActive(prev) ?? "0");

  if (calc.length < 2) {
    calc = "0";
  } else {
    calc = calc.slice(0, -1);
  }

  prev = setActive(calc, prev);
  prev = { ...prev, MDvalue: calc };
  prev = refreshSubDisplay(false, prev);
  return { ...prev };
}

export function HandleClearEntryClick(prev) {
  if (prev.phase === "ResultShown") {
    prev = {
      ...prev,
      operandA: "0",
      operandB: "",
      operator: null,
      phase: "EnteringA",
      MDvalue: "0",
    };
    prev = refreshSubDisplay(false, prev);
    return { ...prev };
  }

  let calc = getActive(prev) ?? "0";

  calc = "";

  prev = setActive(calc, prev);
  prev = { ...prev, MDvalue: "0" };
  prev = refreshSubDisplay(false, prev);
  return { ...prev };
}

export function HandleClearAllClick(prev) {}
