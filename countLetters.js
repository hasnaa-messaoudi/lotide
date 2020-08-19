const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`\u{2705}\u{2705}\u{2705}Assertion Passed: ${actual} === ${expected}`);
  else console.log(`\u{274C}\u{274C}\u{274C}Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(str) {
  str = str.split(" ").join("");
  let result = {};
  for (let char of str) {
    if (result[char]) result[char]++;
    else result[char] = 1;
  }
  return result;
}


let result1 = countLetters("Abrad aCabra");

assertEqual(result1["A"], 1);
assertEqual(result1["b"], 2);
assertEqual(result1["r"], 2);
assertEqual(result1["a"], 4);
assertEqual(result1["d"], 1);
assertEqual(result1[" "], undefined);
assertEqual(result1["C"], 1);