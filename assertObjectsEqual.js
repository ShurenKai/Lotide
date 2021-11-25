const eqObjects = function(object1, object2) {
  const firstKeys = Object.keys(object1)
  const secondKeys = Object.keys(object2)
  const firstValues = Object.values(object1)
  const secondValues = Object.values(object2)

  if(firstKeys.length !== secondKeys.length){
    return false
  }
    
  for (let key of firstKeys) {
    if (object1[key] !== object2[key]){
      return false
    }
  }

  return true
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let output = eqObjects(actual, expected);
  console.log(`Example label: ${inspect(actual)}`);
  if (output) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} != ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "1" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab,ba)