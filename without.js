/*
const without = (arr1, arr2) => {
  let output = [...arr1];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        output.splice(i, 1);
      }
    }
  }
  return output;
};
*/

const without = (arr1, arr2) => {
  let output = [];
  for (let i = 0; i < arr1.length; i++) {
    let match = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        match = true;
      }
    }
    if (!match) {
      output.push(arr1[i]);
    }
  }
  return output;
};

module.exports = without;

// let input = [1, 2, '3', 'hello'];
// let withOut = [1, 2, 3, 'hello'];
// let result = without(input, withOut);

// console.log(result);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);