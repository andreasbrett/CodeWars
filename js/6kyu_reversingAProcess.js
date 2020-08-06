// https://www.codewars.com/kata/5dad6e5264e25a001918a1fc

const numToChar = (n) => String.fromCharCode(97 + n);

function decode(concat) {
  const m = 26;
  let crypt = [];

  // fetch num and r
  const [, num, r] = concat.match(/([0-9]+)([a-z]+)/);

  // encrypt every letter of the alphabet
  for (let x = 0; x < m; x++) crypt.push(numToChar((x * num) % m));

  // check if there were collisions (duplicate entries in crypt[]) when encrypting alphabet
  if (Array.from(new Set(crypt)).length != m) return "Impossible to decode";

  // decrypt message by determining position of encrypted char in encrypted alphabet
  return r
    .split("")
    .reduce((acc, cur) => acc + numToChar(crypt.indexOf(cur)), "");
}
