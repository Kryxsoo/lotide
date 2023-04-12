


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
module.exports = map;

// // const words = ["ground", "control", "to", "major", "tom"];
// // const results1 = map(words, word => word[0]);
// // console.log(results1);  

// // const num = ["1", "2", "3", "4"];
// // const tripleNum = num.map((x) => x * 3)
// // console.log(tripleNum);
// const originalArray = [
//   { name: 'John', age: 30 },
//   { name: 'Jane', age: 25 },
//   { name: 'Bob', age: 40 }
// ];

// //Method 1 function to get a callback with name
// function getName(x) {
//   return { name: x.name};
// }
// const test1 = originalArray.map(getName);

// //Method 2 arrow function getting age
// const test2 = originalArray.map((x) => x.age)

// //Method 3 anonymous function to get both
// const test3 = originalArray.map(function(x) {
//   return {name: x.name, age: x.age}
// });



// //results
// console.log(test1);
// console.log(test2);
// console.log(test3);