const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([1, 2, 3, 4]), 1) // -> pass
assertEqual(head([5, 4, 3, 2, 1]), 3) // -> fail
assertEqual(head([5,6,7]), 5); // -> pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // -> pass