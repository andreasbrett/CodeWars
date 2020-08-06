// https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5

const sumArray = arr => arr.reduce((acc, cur) => acc + cur, 0);

const parseInt = string => {
  
  const numbers = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90,
    'hundred': 100,
    'thousand': 1000,
    'million': 1000000};
  
  let array = [];
  
  // split into words by spaces
  string.split(' ').forEach( word => {
    if (word.indexOf('-') > -1) {
      // split into words by dashes and add them (e.g. forty-three => 40 + 3)
      const currentNumber = word.split('-').reduce( (acc, cur) => acc + (numbers[cur] || 0), 0);
      array.push(currentNumber);
    } else {
      // fetch number from mapping table
      const currentNumber = numbers[word] || 0;
      if (currentNumber === 0) {
        // ignore it
      }
      else if (currentNumber < 100) {
        array.push(currentNumber);
      } else {
        const currentSum = sumArray(array);
        if (currentSum > currentNumber) {
          array.push(array.pop() * currentNumber);  // four thousand three hundred => 3 * 100
        } else {
          array = [currentSum * currentNumber];     // two hundred fifteen thousand => 215 * 1000
        }
      }
    }
  });
  
  return sumArray(array);
}