// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s) {
  return s
    .split(" ")
    .reduce(
      (total, cur) => (cur.length < total ? cur.length : total),
      Number.MAX_SAFE_INTEGER
    );
}
