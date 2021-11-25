const assertEqual = function(actual, expected) {
  if(actual !== expected){
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`)
  }
  else if(actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `)
  }
};

const findKeyByValue = function(obj, input) {
  let keys = Object.keys(obj)
  let objValues = Object.values(obj)
  let i = 0
  let final = ''
  for(let val of objValues){
    if(val === input){
      final = keys[i]
    }
    else {
      i += 1
    }
    if (final === ''){
      final = undefined
    }
  }
  return final
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);