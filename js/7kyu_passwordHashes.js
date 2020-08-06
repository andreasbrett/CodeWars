// https://www.codewars.com/kata/54207f9677730acd490000d1

const crypto = require("crypto");

function passHash(str) {
  return crypto.createHash("md5").update(str).digest("hex");
}
