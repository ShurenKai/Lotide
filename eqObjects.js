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

module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// let v = eqObjects(ab, ba); // => true
// assertEqual(v, true)

// const abc = { a: "1", b: "2", c: "3" };
// let x = eqObjects(ab, abc); // => false
// assertEqual(x, false)

// const aw = {'hello': 'hello', 'goodbye': 'hello'}
// const ah = {'hello': 'hello', 'goodbye': 'goodbye'}
// let y = eqObjects(aw, ah)
// assertEqual(y, false)