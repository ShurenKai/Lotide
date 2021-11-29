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

module.exports = letterPositions;

// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2,3]);
// assertArraysEqual(letterPositions("hello").o, [4]);
// assertArraysEqual(letterPositions("hello").o, [30]); //fail check

