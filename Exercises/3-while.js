'use strict';
// Use while loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sum = (...args) => {
  let sum = 0;
  let i = 0;
  while (i < args.length) {
    sum += args[i];
    i++;
  }
  return sum;
};

module.exports = { sum };
