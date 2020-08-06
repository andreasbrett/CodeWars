// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

function hexStringToRGB(hexString) {
  let [r, g, b] = hexString.match(/([0-9a-f]{2})/gi);
  return { r: parseInt(r, 16), g: parseInt(g, 16), b: parseInt(b, 16) };
}
