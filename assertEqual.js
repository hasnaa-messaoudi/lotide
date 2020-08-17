// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) console.log("\u{2705}\u{2705}\u{2705}Assertion Passed: ${actual} === ${expected}");
  else console.log("\u{274C}\u{274C}\u{274C}Assertion Failed: ${actual} !== ${expected}");
};


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual(1, 2);
