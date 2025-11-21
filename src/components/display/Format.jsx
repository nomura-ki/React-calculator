export function Format(value) {
  if (typeof value === "number") {
    return value.toLocaleString("ja-JP", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 10,
    });
  } else {
    return String(value);
  }
}
