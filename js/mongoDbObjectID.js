// https://www.codewars.com/kata/52fefe6cb0091856db00030e

var Mongo = {
  isValid: function (s) {
    return /^[0-9a-f]{24}$/.test(s);
  },
  getTimestamp: function (s) {
    return this.isValid(s) && new Date(1000 * parseInt(s.substr(0, 8), 16));
  },
};
