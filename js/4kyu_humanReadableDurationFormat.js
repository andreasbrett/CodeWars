// https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const singularOrPlural = (number, unit) =>
    `${number} ${unit["singular"]}${number > 1 ? "s" : ""}`;
  const reduceHumanReadable = (acc, cur, idx, arr) =>
    acc +
    cur +
    (idx == arr.length - 1 ? "" : idx == arr.length - 2 ? " and " : ", ");

  const unitMap = [
    { in_seconds: 31536000, singular: "year" },
    { in_seconds: 86400, singular: "day" },
    { in_seconds: 3600, singular: "hour" },
    { in_seconds: 60, singular: "minute" },
    { in_seconds: Number.MAX_VALUE, singular: "second" },
  ];

  let result = [];

  // go through each unit (years, days, hours, minutes, seconds)
  unitMap.forEach((unit, idx, arr) => {
    // division and remainder
    const division = Math.floor(seconds / unit["in_seconds"]);
    seconds = seconds % unit["in_seconds"];

    // we reached the last unit (=seconds) and the remainder is > 0
    if (division === 0 && seconds > 0 && idx === arr.length - 1) {
      result.push(singularOrPlural(seconds, unit));
    }

    // this is more than 1 of the current unit
    else if (division > 0) {
      result.push(singularOrPlural(division, unit));
    }
  });

  return result.reduce(reduceHumanReadable, "");
}
