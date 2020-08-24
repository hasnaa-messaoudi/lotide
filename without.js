const without = function(source, itemsToRemove) {
  let result = [];
  let inIt;
  for (let sourceItem of source) {
    inIt = false;
    for (let itemToRemove of itemsToRemove) {
      if (sourceItem === itemToRemove) inIt = true;
    }
    if (inIt === false) result.push(sourceItem);
  }
  return result;
}

module.exports = without;

/*
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without(words, words), []);
assertArraysEqual(without(words, ["hello", "lighthouse"]), ["world"]);
assertArraysEqual(without(words, [3]), words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

*/