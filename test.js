const talkLikeAPirate = require('./index');
const assert = require('chai').assert;
const sinon = require('sinon');

sinon.stub(Math, 'random').returns(0);
assert.strictEqual(Math.random(), 0, 'stub worked');

module.exports = {
  'talk-like-a-pirate': () => {
    const text = 'Drink up folks, wahoo! A gentleman\'s life for me!';
    const actual = talkLikeAPirate(text);
    console.log(actual); // eslint-disable-line
    const expected = 'Drink up me hearties, yo ho! A pirate\'s life for me!';
    assert(actual === expected);
  },
};
