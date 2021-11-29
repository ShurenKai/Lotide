const assertEqual = require("./assertEqual");

const eqArrays = function(arr1, arr2) {
  let bool = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      bool = true;
    } else {
      bool = false;
      return bool;
    }
  }
  return bool;
};

module.exports = eqArrays;
