'use strict';
// Use for loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sum = (...args) => {
  let summar = 0;

  for (let i = 0; i < args.length; i += 1) {
    summar += args[i];
  }
  return summar;
};

module.exports = { sum };
