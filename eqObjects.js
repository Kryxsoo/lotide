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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true)
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false)