// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/

const intervalLength = interval => interval[1] - interval[0];
const sortIntervals = (intervalA, intervalB) => intervalA[0] - intervalB[0];
const intervalsOverlap = (intervalA, intervalB) => (intervalA[1] >= intervalB[0]);
const combineIntervals = intervals => intervals.filter( (interval, idx, intervals) => {
  if (idx+1 < intervals.length && intervalsOverlap(interval, intervals[idx+1])) {
    intervals[idx+1] = [ interval[0], Math.max(interval[1], intervals[idx+1][1]) ];
    return false;
  }
  return true;
});

const sumIntervals = intervals => {
  const sortedIntervals = intervals.sort(sortIntervals);
  const combinedIntervals = combineIntervals(sortedIntervals);
  const sum = combinedIntervals.reduce( (acc, cur) => acc + intervalLength(cur), 0);
  return sum;
}