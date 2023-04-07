const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
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


//For arrays with one or two elements, there is no middle. Return an empty array.

//For arrays with odd number of elements, an array containing a single middle element should be returned.
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned


// TEST/ASSERTION FUNCTIONS
// const eqArrays = function(...) {
//   //...
// }

// const assertArraysEqual = function(actual, expected) {
//   //...
// }

// ACTUAL FUNCTION
const middle = (array) => {
  if (array.length === 1 || array.length === 2){
    return [];
  }
  if (array.length%2===1) {
    return array[array.length/2-0.5]
    // return array[Math.floor(array.length/2)]
  } 
  return [array[array.length/2-1], array[array.length/2 ]] 
}


assertEqual(middle([1, 2, 3, 4]), [2, 3], true) // => [2, 3]
assertEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4], true) // => [3, 4]
// TEST CODE
// ...

console.log(String([3,4])===String([3,4]))