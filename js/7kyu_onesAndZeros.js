// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = (arr) => {
  return arr.reduce(
    (acc, cur, idx, src) =>
      acc + (cur == 0 ? 0 : Math.pow(2, src.length - idx - 1)),
    0
  );
};
