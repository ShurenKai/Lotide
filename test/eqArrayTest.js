const eqArrays = require("../eqArrays");

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // should return true
console.log(eqArrays([1, 2, 3], [1, 2, 4])) // should return false