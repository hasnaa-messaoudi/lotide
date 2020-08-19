const eqArrays = function(array1, array2) {
  let result = (array1.length === array2.length) ? true : false;
  if (result) {
    for (let i = 0; i < array1.length; i++)
      if (array1[i] !== array2[i]) {
        result = false; break;
      }
  }
  return result;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) console.log(`\u{2705}\u{2705}\u{2705}Assertion Passed: ${array1} === ${array2}`);
  else console.log(`\u{274C}\u{274C}\u{274C}Assertion Failed: ${array1} !== ${array2}`);
};

const middle = function(array) {
  let result = [];
  if (array.length <= 2) return result;
  else {
    if (array.length % 2 === 0) result.push(array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]);
    else result.push(array[Math.floor(array.length / 2)]);
  }
  return result;
};

// TEST CODE

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);