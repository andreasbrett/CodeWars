// https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature, n) {
  if (n <= 3) return signature.slice(0, n);

  let result = [...tribonacci(signature, n - 1)];
  result.push(result.slice(-3).reduce((acc, cur) => (acc += cur), 0));
  return result;
}
