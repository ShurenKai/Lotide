// const eqArrays = require('./eqArrays')
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

assertArraysEqual([5, 6], middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
assertArraysEqual(5, middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
