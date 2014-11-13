dictionary = require('./dictionary');

function isUpperCase(char) {
  return char.toUpperCase() === char;
}

function talkLikeAPirate(str) {
  return str.replace(/[\w']+/ig, function(match) {
    var replacement = dictionary[match.toLowerCase()];

    if (!replacement) {
      return match;
    }

    if (Array.isArray(replacement)) {
      // get array element at random
      replacement = replacement[Math.floor(Math.random() * replacement.length)];
    }

    if (isUpperCase(match[0])) {
      replacement = replacement[0].toUpperCase() + replacement.slice(1);
    }

    return replacement;
  });
}

module.exports = talkLikeAPirate;
