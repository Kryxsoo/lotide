# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kryxsoo/lotide`

**Require it:**

`const _ = require('@kryxsoo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


*`head`: returns the first element of an array

*`tail`: returns the last element of an array

*`middle`: returns the middle element(s) of an array

*`assertEqual`: compares two primitive values and returns true if they are equal

*`eqArrays`: compares two arrays and returns true if they are equal

*`assertArraysEqual`: compares two arrays and returns true if they are equal

*`assertObjectsEqual`: compares two objects and returns true if they are equal

*`countLetters`: takes a string as input and returns an object that indicates how many times each letter appears in the *string

*`countOnly`: takes a collection of items and returns a count for a specific subset of those items

*`findKey`: takes an object and a callback function, and returns the first key for which the callback function returns a truthy value

*`findKeyByValue`: takes an object and a value, and returns the first key that contains the value

*`map`: takes an array and a callback function, and returns a new array based on the results of the callback function

*`takeUntil`: takes an array and a callback function, and returns a new array with elements until the callback function returns true

*`without`: takes a source array and an itemsToRemove array, and returns a new array with elements from the source array that are not in the itemsToRemove array

*`letterPositions`: takes a string as input and returns an object that lists all the indices where each character appears in the string.