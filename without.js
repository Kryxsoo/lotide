const without = (source, itemsToRemove) => {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i])
    }
  }
  return result;
}

module.exports = without;

//test
assertEqual(eqArrays(without([1, 2, 3], [1])));
assertEqual(eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]), true); // => true
