const letterPositions = function(sentence) {
  const results = {};
  // sentence = sentence.split(" ").join("");
  // logic to update results here
  let char = "";
  for (let i = 0; i < sentence.length; i++) {
    char = sentence[i];
    if (char != " ") {
      if (!results[char]) {
        results[char] = [];
      }
      results[char].push(i)
    }
  }
  return results;
};

module.exports = letterPositions;

/*
const str = letterPositions("hello");

assertArraysEqual(str.h, [0]);
assertArraysEqual(str.e, [1]);
assertArraysEqual(str.l, [2, 3]);
assertArraysEqual(str.o, [4]);
*/