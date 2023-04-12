const findKeyByValue = function(object, genre) {
  let keys = Object.keys(object);
  for (let key of keys) {
    if (object[key] === genre) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKeyByValue;
//Consider using the Object.keys function to help you easily search through all the object keys.
//Consider using for...of to loop over the keys returned by Object.keys.
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);