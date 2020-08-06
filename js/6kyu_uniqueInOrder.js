// https://www.codewars.com/kata/54e6533c92449cc251001667

var uniqueInOrder = function (iterable) {
  return [...iterable].filter(
    (cur, idx, arr) => idx == 0 || arr[idx - 1] !== cur
  );
};
