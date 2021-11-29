const eqObjects = require('./eqObjects')

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

module.exports = assertObjectsEqual;

// const ab = { a: "1", b: "1" };
// const ba = { b: "2", a: "1" };

// assertObjectsEqual(ab,ba)