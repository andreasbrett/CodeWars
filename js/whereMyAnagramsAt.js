// https://www.codewars.com/kata/523a86aa4230ebb5420001e1

function anagrams(word, words) {
  word = word.split("").sort().join("");
  return words.filter((itm) => word === itm.split("").sort().join(""));
}
