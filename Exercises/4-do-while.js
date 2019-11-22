'use strict';
// Use do..while loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6
const sum = (...args) => {
  if (args.length === 0) return 0;
  let sum = 0;
  do {
    sum += args.pop();
  } while (args.length > 0);
  return sum;
};

module.exports = { sum };
