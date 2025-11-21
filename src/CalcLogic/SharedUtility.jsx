import Decimal from "https://unpkg.com/decimal.js@latest/decimal.mjs";

const MaxNumber = 16;

export function isOverMaxNumber(numberValue) {
  const str = Decimal.isDecimal()
    ? numberValue.toString()
    : String(numberValue);
  const digits = str.replace(/\./g, "");
  return digits.length > MaxNumber;
}

function activeName(prev) {
  return prev.phase === "EnteringA" ? "operandA" : "operandB";
}

export function getActive(prev) {
  return activeName(prev) === "operandA" ? prev.operandA : prev.operandB;
}

export function setActive(value, prev) {
  return activeName(prev) === "operandA"
    ? { ...prev, operandA: value }
    : { ...prev, operandB: value };
}

export function refreshSubDisplay(withEqual, prev) {
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
