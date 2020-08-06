// https://www.codewars.com/kata/58ca658cc0d6401f2700045f

function findMultiples(integer, limit) {
  let result = [];
  for (let mult = integer; mult <= limit; mult += integer) {
    result.push(mult);
  }
  return result;
}
