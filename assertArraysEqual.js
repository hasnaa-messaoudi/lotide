const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) console.log(`\u{2705}\u{2705}\u{2705}Assertion Passed: ${array1} === ${array2}`);
  else console.log(`\u{274C}\u{274C}\u{274C}Assertion Failed: ${array1} !== ${array2}`);
};

module.exports = assertArraysEqual;