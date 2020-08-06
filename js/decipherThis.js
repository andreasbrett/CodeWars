// https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(str) {
  return str
    .split(" ")
    .map((word) => {
      const [, num, s] = word.match(/([0-9]+)([a-z]*)/);
      return (
        String.fromCharCode(num) +
        s.split("").reduce((acc, cur, idx, arr) => {
          if (idx == 0) return acc + arr[arr.length - 1];
          if (idx == arr.length - 1) return acc + arr[0];
          return acc + cur;
        }, "")
      );
    })
    .join(" ");
}
