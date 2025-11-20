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

function setActive(prev) {
  return activeName(prev) === "operandA"
    ? { ...prev, operandA: 3 }
    : { ...prev, operandB: 8 };
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

export function HandleNumberClick(num, prev) {}

export function HandlePointClick(prev) {}

export function HandleOperatorClick(op, prev) {}

export function HandleEqualClick(prev) {}

export function HandleBackspaceClick(prev) {}

export function HandleClearEntryClick(prev) {}

export function HandleClearAllClick(prev) {}
