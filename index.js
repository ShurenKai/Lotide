const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual')
const letterPositions = require('./letterPositions')
const findKeyByValue = require('./findKeyByValue')
const eqObjects = require('./eqObjects')
const map = require('./map')
const without = require('./without')
const takeUntil = require('./takeUntil')
const findKey = require('./findKey')
const countLetters = require('./countLetters')
const assertObjectsEqual = require('./assertObjectsEqual');
const countOnly = require('./countOnly');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  letterPositions: letterPositions,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  map: map,
  without: without,
  takeUntil: takeUntil,
  findKey: findKey,
  countLetters: countLetters,
  assertObjectsEqual: assertObjectsEqual,
  countOnly: countOnly
};