const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`\u{2705}\u{2705}\u{2705}Assertion Passed: ${actual} === ${expected}`);
  else console.log(`\u{274C}\u{274C}\u{274C}Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(struct, callback) {
  let results = undefined;
  for (let item in struct) {
    if (callback(struct[item])) {
      results = item;
      break;  
    }   
  }
  return results;
  
};


const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
assertEqual( result1, "noma"); // => "noma"

const result2 = findKey({}, x => x.stars === 1);
assertEqual( result2, undefined) // => "noma"
