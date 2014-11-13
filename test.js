talkLikeAPirate = require('./index');
assert = require('chai').assert;
sinon = require('sinon');

sinon.stub(Math, 'random').returns(0);
assert.strictEqual(Math.random(), 0, 'stub worked');

module.exports = {

  'talk-like-a-pirate': function() {
    var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    var actual = talkLikeAPirate(text);
    var expected = "Lorem Ipsum be simply dummy text of ye printing and typesetting industry. Lorem Ipsum has been ye industry's standard dummy text ever since ye 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ye leap into electronic typesetting, remaining essentially unchanged. It was popularised in ye 1960s with ye release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    assert(actual === expected);
  }

};
