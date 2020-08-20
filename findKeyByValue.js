const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`\u{2705}\u{2705}\u{2705}Assertion Passed: ${actual} === ${expected}`);
  else console.log(`\u{274C}\u{274C}\u{274C}Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(object, value) {
  let result = undefined;
  for (let item in object) {
    if (object[item] === value) {
      result = item;break;
    }
  }
  return result;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
