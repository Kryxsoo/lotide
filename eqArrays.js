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

// Test
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false
  
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
  