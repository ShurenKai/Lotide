const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let keys = Object.keys(itemsToCount)
  let keyBoolean = Object.values(itemsToCount)
  let keysItems = []
  let output = {}
  for(let i = 0; i < keys.length; i++){
    if(allItems.includes(keys[i]) && keyBoolean[i]){
      keysItems.splice(0, 0, keys[i])
    }
  }
  let nameUsed = []
  for(let name of firstNames) {
    if(keysItems.includes(name) && !nameUsed.includes(name)){
      nameUsed.push(name)
      output.[name] = 1
    }
    else if(nameUsed.includes(name)){
      output.[name] = output.[name] + 1
    }
  }
  return output
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);