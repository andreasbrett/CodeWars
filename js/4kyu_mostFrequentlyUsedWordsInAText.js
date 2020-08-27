// https://www.codewars.com/kata/51e056fe544cf36c410000fb

function topThreeWords(text) {
  const words = text
    .replace(/([^a-zA-Z\'])+/gm, "#")               // replace non-words by #
    .split("#");                                    // split text into words by #

  const wordCount = new Map();
  words.forEach((word) => {
    if (word === "" || word === "'") return;        // special chars that'd be harder to fetch in regex
    word = word.toLowerCase();                      // case insensitive
    wordCount.set(word, 1 + (wordCount.has(word) ? wordCount.get(word) : 0));
  });

  return [...wordCount.entries()]
    .sort((itemA, itemB) => itemB[1] - itemA[1])    // sort by count
    .filter((item, index) => index < 3)             // use only top 3 words
    .map((item) => item[0]);                        // map down to word (ignore count)
}
