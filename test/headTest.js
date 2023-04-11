const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5'); 
});

assert(head([1, 2, 3, 4]), 1) // -> pass
assert(head([5, 4, 3, 2, 1]), 3) // -> fail
assert(head([5,6,7]), 5); // -> pass
assert(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // -> pass
