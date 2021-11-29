const assertEqual = function(actual, expected) {
  if(actual !== expected){
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`)
  }
  else if(actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `)
  }
};

//return a truthy value is key is found
//return undefined if key isn't found 

const findKey = (obj, callback) => {
  let included = true
  for(let title in obj){
    if(callback(obj[title])){
      return title
    }
    else{
      included = false
    }
  }
  if(!included){
    return undefined
  }
}

//test case
const help = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(help)