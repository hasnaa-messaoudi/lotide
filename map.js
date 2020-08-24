const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;



/*
const words = ["ground", "control", "to", "major", "tom"];


const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g","c","t","m","t"]);

const results2 = map(words, word => word.length);
assertArraysEqual(results2, [6,7,2,5,3]);

const words2 = [];
const results3 = map(words2, word => word.word[0]);
assertArraysEqual(results3, []);
*/