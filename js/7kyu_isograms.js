// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str) {
  return str
    .toUpperCase()
    .split("")
    .reduce(
      (result, cur, idx, arr) => result && arr.indexOf(cur, idx + 1) < 0,
      true
    );
}
