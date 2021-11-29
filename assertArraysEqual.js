const eqArrays = require('./eqArrays')

const assertArraysEqual = function(arr1, arr2) {
  let output = eqArrays(arr1, arr2);
  if (output) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} != ${arr2}`);
  }
};

module.exports = assertArraysEqual;