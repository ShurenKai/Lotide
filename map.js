const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// testing
// const animals = ['dogs', 'cats', 'hamsters']
// const spooksItems = ['chair', 'tree', 'bed']

// const animalFarm = [
//   {name: 'milo', creature: 'cloud'},
//   {name: 'carrot', creature: 'stuffed'},
//   {name: 'apricot', creature: 'spoon'},
//   {name: 'Cloud Melon', creature: 'sasuke'}
// ]

// const resultAnimal = map(animals, animal => animal[0])
// const resultSpook = map(spooksItems, spooksItem => spooksItem[0])
// var names = animalFarm.map((animal) => {
//   return animal.name
// })

// let myMap = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three'],
// ])

// assertArraysEqual(resultAnimal, ['d', 'c', 'h'])
// assertArraysEqual(resultSpook, ['c', 't', 'b'])
// assertArraysEqual(names, ['milo', 'carrot', 'apricot', 'Cloud Melon'])
// assertArraysEqual(myMap, Object)
