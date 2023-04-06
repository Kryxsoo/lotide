const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

function countLetters(sentence) {
  let letterCount = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
}

let result = countLetters('LHL');
assertEqual(result['L'], 2);
assertEqual(result['H'], 1);

console.log(countLetters('LHL'));
console.log(countLetters("lighthouse in the house"));