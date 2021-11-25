const eqArrays = function(arr1, arr2) {
  let bool = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      bool = true;
    } else {
      bool = false;
      break
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

const words = ["ground", "control", "to", "major", "tom"];
const animals = ['dogs', 'cats', 'hamsters']
const spooksItems = ['chair', 'tree', 'bed']

const animalFarm = [
  {name: 'milo', creature: 'cloud'},
  {name: 'carrot', creature: 'stuffed'},
  {name: 'apricot', creature: 'spoon'},
  {name: 'Cloud Melon', creature: 'sasuke'}
]

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// const results1 = map(words, word => word[0]);
// console.log(results1);

const resultAnimal = map(animals, animal => animal[0])
const resultSpook = map(spooksItems, spooksItem => spooksItem[0])
var names = animalFarm.map((animal) => {
  return animal.name
})

let myMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

console.log(myMap)

assertArraysEqual(resultAnimal, ['d', 'c', 'h'])
assertArraysEqual(resultSpook, ['c', 't', 'b'])
assertArraysEqual(names, ['milo', 'carrot', 'apricot', 'Cloud Melon'])
assertArraysEqual(myMap, Object)
