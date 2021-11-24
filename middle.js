const eqArrays = (arr1, arr2) => {
  let bool = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      bool = true;
    } else {
      bool = false;
      process.exit();
    }
  }
  return bool;
};

const assertArraysEqual = function(arr1, arr2) {
  let output = eqArrays(arr1, arr2);
  if (output) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} != ${arr2}`);
  }
};

const middle = (arr) => {
  if (arr.length < 3) {
    return [];
  } else {
    if ((arr.length - 1) % 2 === 0) {
      let midSection = (arr.length - 1) / 2;
      console.log(midSection);
      return arr[midSection];
    } else if (!(arr.length - 1) % 2 === 0) {
      let midSection = (arr.length - 1) / 2;
      let output1 = Math.floor(midSection);
      let output2 = Math.ceil(midSection);
      return [arr[output1], arr[output2]];
    }
  }
};

assertArraysEqual([5, 6], middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


/*
Pseudo code for implementation
const middle takes array
  if that array length is less than 3
    return empty array
  if the array length is more than 3
    check how long it is
    divide the length by 2 if it's an even number
    return the middle number
  or else
    still divide the length by 2
      if it's a decimal
      math ceil and math floor it
    return the ceil and floor numbers
*/