const tail = require("../tail");
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('#tail', () => {
  it('should return the tail end of an array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(['Lighthouse', 'Labs'], tail(words))
  })
  it('should return 3 when describing words, origin undisturbed', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words)
    assert.deepEqual(3, words.length);
  });
});