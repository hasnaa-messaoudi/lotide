const flatten = function(array) {
  let result = [];
  for (let item of array) {
    if (!Array.isArray(item)) result.push(item);
    else {
      for (let i of item) {
        result.push(i);
      }
    }
  }
  return result;
};

module.exports = flatten;

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
