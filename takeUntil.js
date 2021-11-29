// Arguments
// array (Array): The array to query.
// [predicate=_.identity] (Function): The function invoked per iteration.
// Returns
// (Array): Returns the slice of array.

const takeUntil = (array, callback) => {
  let output = []
  let cont = true
  array.forEach((element) => {
    if(!callback(element) && cont === true){
      output.push(element)
    } else {
      cont = false
    }
  })
  return output
}

module.exports = takeUntil;

// Expected Output
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);


// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);