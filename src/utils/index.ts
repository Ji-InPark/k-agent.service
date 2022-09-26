export function isNullOrWhiteSpace(str: String) {
  return str === null || str.match(/^ *$/) !== null;
}
