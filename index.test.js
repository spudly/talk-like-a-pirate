const talkLikeAPirate = require('./index');

beforeAll(() => {
  Math.random = () => 0;
});

test('talk-like-a-pirate', () => {
  expect(talkLikeAPirate("Drink up folks, wahoo! A gentleman's life for me!")).toBe(
    "Drink up me hearties, yo ho! A pirate's life for me!"
  );
});
