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

const without = function(source, itemsToRemove) {
  let result = [];
  let inIt;
  for (let sourceItem of source) {
    inIt = false;
    for (let itemToRemove of itemsToRemove) {
      if (sourceItem === itemToRemove) inIt = true;
    }
    if (inIt === false) result.push(sourceItem);
  }
  return result;
}


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without(words, words), []);
assertArraysEqual(without(words, ["hello", "lighthouse"]), ["world"]);
assertArraysEqual(without(words, [3]), words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

