const eqArrays   = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
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
          console.log(object1[keys1[i]], object2[keys1[i]]);
          return false;
        }
      }
    }
    return true;
  }
};

module.exports = eqObjects;
/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const cd3 = { c: "1", d: ["2", 3, "4"] };
assertEqual(eqObjects(cd3, cd2), false); // => false
*/