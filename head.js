// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`\u{2705}\u{2705}\u{2705}Assertion Passed: ${actual} === ${expected}`);
  else console.log(`\u{274C}\u{274C}\u{274C}Assertion Failed: ${actual} !== ${expected}`);
};

const head = function(array) {
  return array[0];
};


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 7);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["HelloLabs", "Lighthouse", "Labs"]), "Hello");

