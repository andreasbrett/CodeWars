// https://www.codewars.com/kata/55c6126177c9441a570000cc

const digitSum = (s) =>
  s.split("").reduce((acc, cur) => (acc += parseInt(cur)), 0);

function orderWeight(s) {
  return s
    .split(" ")
    .sort((a, b) => {
      let diff = digitSum(a) - digitSum(b);
      return diff != 0 ? diff : a < b ? -1 : 1;
    })
    .join(" ");
}
