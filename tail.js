const assertEqual = require("./assertEqual");

const tail = function(arr) {
  let newArr = arr.slice(1,arr.length);
  return newArr;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

module.exports = tail;