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


const eqObjects = function(object1, object2) {
  let result = true;
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false
  }
  else {
    for (let i = 0; i < keys1.length; i++) {
      if (Array.isArray(object1[keys1[i]])) {
        return eqArrays(object1[keys1[i]], object2[keys1[i]]);
      } 
      else {
        if (object1[keys1[i]] !== object2[keys1[i]]) {
          return false;
        }
      }
    }
    return true;
  }
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // Implement me!
  if (eqObjects(actual, expected)) console.log(`\u{2705}\u{2705}\u{2705}Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else console.log(`\u{274C}\u{274C}\u{274C}Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);