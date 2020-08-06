// https://www.codewars.com/kata/5848565e273af816fb000449

var encryptThis = function (text) {
  if (text.length == 1) return `${text.charCodeAt(0)}`;
  return text
    .split(" ")
    .map((word) =>
      word.split("").reduce((acc, cur, idx, arr) => {
        if (idx == 0) return cur.charCodeAt(0);
        if (idx == 1) return acc + arr[arr.length - 1];
        if (idx == arr.length - 1) return acc + arr[1];
        return acc + cur;
      }, "")
    )
    .join(" ");
};
