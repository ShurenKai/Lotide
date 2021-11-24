const eqArrays = function(arr1, arr2) {
  let bool = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      bool = true;
    } else {
      bool = false;
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

const letterPositions = function(sentence) {
  let results = {};
  let letters = sentence
  i = 0
  for(let letter of letters) {
      if(letter === ' '){
        i = i + 1
        continue
      }
      else if(results[letter] === undefined){
      results[letter] = [i]
      i = i + 1
    } else if (results[letter] !== undefined) {
      results[letter].push(i)
      i = i + 1
    }
  }
  console.log(results)
  return results;
};

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("hello").o, [30]); //fail check

