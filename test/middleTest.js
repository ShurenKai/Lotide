const chai = require('chai');
const assert = require('chai').assert;

const middle = require('../middle')

describe("#middle", () => {
  it('should return [5, 6] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    assert.deepEqual([5,6], middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
  });
  it('should return 5 for [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
    assert.deepEqual(5, middle([1, 2, 3, 4, 5, 6, 7, 8, 9]))
  });
})