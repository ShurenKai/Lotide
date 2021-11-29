# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shurenkai/lotide`

**Require it:**

`const lotide = require('@shurenkai/lotide');`

**Call it:**

`const results = lotide.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays(arr1, arr2)`: will compare to see if 2 arrays are exactly the same or not (arr1 === arr2)
* `assertEquals(actual, expected)`: will return a string that states whether or not 2 outputs are the same
* `assertArrayEquals(arr1, arr2)`: will return confirmation to see if 2 arrays are exactly the same or not
* `eqObjects(obj1, obj2)`: will compare to see if 2 objects are the same or not
* `assertObjectsEqual`: will return confirmation to see if 2 objects are the same or not
* `countLetters(str)`: will return the number of letters that are in a string
* `letterPositions(sentence)`: will return what positions in an array letters are in
* `countOnly(allItems, itemsToCount)`: will count chosen items from an array
* `findKey(obj, callback)`: will use a callback function to find certain keys in an object
* `findKeyByValue(obj, input)`: will find key in an object based on user input
* `map(array, callback)`: will take a callback function to find items in an array
* `head(arr)`: will return the head of an array (only return first value of array)
* `tail(arr)`: will return an array without the first value (the head)
* `middle(arr)`: will find the middle item(s) of an array