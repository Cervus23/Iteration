'use strict';


const max = matrix => {
  // Use nested for loop to find max value in 2d matrix
  // For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  // should return 9

  let maxv = matrix[0][0];

  for (const row of matrix) {
    for (const item of row) {
      maxv < item ? maxv = item : maxv;
    }
  }
  return maxv;
};

module.exports = { max };
