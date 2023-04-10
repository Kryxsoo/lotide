const eqArrays = (arr1, arr2) =>{
  if (arr1.length === arr2.length) {
    return true
  }
for (i = 0;i < arr1.length; i++) {
  if (arr1[i] === arr2[i]) {
    return true;
  }
}
return true;
};

const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1)
  let arr2 = Object.keys(object2)
  if (arr1.length === arr2.length) {
    for (let item of arr1){
      if (object2[item] === undefined){
        return false
      }
    }
    return true
  }
  return false;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertObjectsEqual("Lighthouse Labs", "Bootcamp");
assertObjectsEqual(1, 1);
