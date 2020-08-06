// https://www.codewars.com/kata/55a29405bc7d2efaff00007c

function going(n) {
  const truncateFloat = (f, n) => {
    const a = f.toString().split(".");
    return parseFloat(`${a[0]}.${a[1].substr(0, n)}`);
  };

  // simplified expression
  // un = (1 / n!) * (1! + 2! + 3! + ... + n!)
  // un = 1 + (1 / n) + (1 / n*(n-1)) + (1 / n*(n-1)*(n-2)) + ... + (1 / n!)

  let tmp = (result = 1);
  for (let i = n; i > 1; i--) {
    tmp *= i;
    result += 1 / tmp;
  }
  return truncateFloat(result, 6);
}
