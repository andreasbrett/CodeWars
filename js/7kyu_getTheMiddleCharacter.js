// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
  let l = s.length;
  if (l == 1) return s;
  return l % 2 == 0
    ? s.substring(l / 2 - 1, l / 2 + 1)
    : s.charAt(Math.ceil(l / 2) - 1);
}
