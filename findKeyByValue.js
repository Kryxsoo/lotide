const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//Consider using the Object.keys function to help you easily search through all the object keys.

//Consider using for...of to loop over the keys returned by Object.keys.
const findKeyByValue = function(object, genre) {
  let keys = Object.keys(object);
  for (let key of keys) {
    if (object[key] === genre) {
      return key;
    }
  }
  return undefined;
}

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);