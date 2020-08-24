const findKeyByValue = function(object, value) {
  let result = undefined;
  for (let item in object) {
    if (object[item] === value) {
      result = item;break;
    }
  }
  return result;
};

module.exports = findKeyByValue;

/*
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/