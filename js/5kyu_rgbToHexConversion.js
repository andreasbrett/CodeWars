// https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b) {
  const pad = (s) => (s.length < 2 ? "0" + s : s);
  const decToHex = (dec) =>
    dec <= 0 ? "00" : dec >= 255 ? "FF" : pad(dec.toString(16).toUpperCase());
  return `${decToHex(r)}${decToHex(g)}${decToHex(b)}`;
}
