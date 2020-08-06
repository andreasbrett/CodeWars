// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
  return str.replace(/[-_]([a-zA-Z])/g, (_, x) => x.toUpperCase());
}
