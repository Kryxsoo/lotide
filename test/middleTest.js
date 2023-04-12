const assertArraysEqual = require('chai').assert;
const { assert } = require('chai');
const middle = require('../middle');

describe("#middle", () => {
  it("Returns 2 & 3", () => {
    assertArraysEqual.deepEqual(middle([1, 2, 3, 4]), [2, 3], true)
  });
});

it("returns [3, 4]", () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4], true)
});

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], true) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4], true) // => [3, 4]