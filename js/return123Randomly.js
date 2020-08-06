// https://www.codewars.com/kata/593e84f16e836ca9a9000054

function one_two_three() {
  switch (`${one_two()}${one_two()}`) {
    case "11":
      return 1;
    case "22":
      return 2;
    case "12":
      return 3;
    default:
      return one_two_three();
  }
}
