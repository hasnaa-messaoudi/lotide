// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`\u{2705}\u{2705}\u{2705}Assertion Passed: ${actual} === ${expected}`);
  else console.log(`\u{274C}\u{274C}\u{274C}Assertion Failed: ${actual} !== ${expected}`);
}; 

const assertArrayEqual = function(array1, array2) {
  let equal = true;
  if (array1.length !== array2.length) {
    console.log(`\u{274C}\u{274C}\u{274C}Assertion Failed: ${array1} !== ${array2}`);
  }
  else {
    for (let i = 0; i < array1.length; i++){
      if (array1[i] !== array2[i]) {
        equal = false; break;
      }
    } 
    if (equal) console.log(`\u{2705}\u{2705}\u{2705}Assertion Passed: ${array1} === ${array2}`);
    else console.log(`\u{274C}\u{274C}\u{274C}Assertion Failed: ${array1} !== ${array2}`);
  }

}; 

const tail = function(array){
  let result = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
};



// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArrayEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

const result1 = tail(["Hello"]);
assertArrayEqual(result1, []); // => will always fail!

const result2 = tail(["Hello", "Lighthouse"]);
assertArrayEqual(result2, []); // => will always fail!