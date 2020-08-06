// https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens) {
  return (
    parens.split("").reduce((acc, cur) => {
      return (acc += acc < 0 ? -999 : cur == "(" ? 1 : -1);
    }, 0) == 0
  );
}
