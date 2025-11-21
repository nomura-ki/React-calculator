export function ChangeDisplayOperator(operator) {
  switch (operator) {
    case "+":
      return "+";
    case "-":
      return "－";
    case "/":
      return "÷";
    case "*":
      return "×";
    default:
      return;
  }
}

export function ChangeCalcOperator(operator) {
  switch (operator) {
    case "+":
      return "+";
    case "－":
      return "-";
    case "÷":
      return "/";
    case "×":
      return "*";
    default:
      return;
  }
}
