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


const letterPositions = function(sentence) {
  const results = {};
  // sentence = sentence.split(" ").join("");
  // logic to update results here
  let char = "";
  for (let i = 0; i < sentence.length; i++) {
    char = sentence[i];
    if (char != " ") {
      if (!results[char]) {
        results[char] = [];
      }
      results[char].push(i)
    }
  }
  return results;
};

const str = letterPositions("hello");

assertArraysEqual(str.h, [0]);
assertArraysEqual(str.e, [1]);
assertArraysEqual(str.l, [2, 3]);
assertArraysEqual(str.o, [4]);
