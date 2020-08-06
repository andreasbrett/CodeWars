// https://www.codewars.com/kata/5ce969ab07d4b7002dcaa7a1

function solve(s) {
  let i = Math.floor(s.length / 2);

  while (i > 0 && s.substr(0, i) != s.substr(-1 * i)) {
    i--;
  }
  return i;
}
