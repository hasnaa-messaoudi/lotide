const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // Implement me!
  if (eqObjects(actual, expected)) console.log(`\u{2705}\u{2705}\u{2705}Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else console.log(`\u{274C}\u{274C}\u{274C}Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;

/*
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);
*/