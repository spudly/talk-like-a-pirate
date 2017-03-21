(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.talkLikeAPirate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
  comes: 'hails',
  friends: 'crew',
  your: 'ye',
  you: 'ye',
  right: 'starboard',
  woman: 'wench',
  lawyer: 'scurvy land lubber',
  hello: ['ahoy', 'avast'],
  the: ['ye', 'yonder', 'thar'],
  girl: 'lass',
  is: 'be',
  "it's": 'it be',
  boy: 'cabin boy',
  person: 'landlubber',
  friend: 'mate',
  beer: 'grog',
  left: 'port',
  yes: ['yarr', 'aye'],
  are: 'be',
  change: 'alter',
  folks: 'me hearties',
  should: 'shall',
  my: 'me',
  gentleman: 'pirate',
  'gentleman\'s': 'pirate\'s',
  wahoo: 'yo ho',
};

},{}],2:[function(require,module,exports){
const dictionary = require('./dictionary');

const isUpperCase = char => char.toUpperCase() === char;

const talkLikeAPirate = str => str.replace(/[\w']+/ig, match => {
  const replacement = dictionary[match.toLowerCase()];

  if (!replacement) {
    return match;
  }

  if (Array.isArray(replacement)) {
    // get array element at random
    return replacement[Math.floor(Math.random() * replacement.length)];
  }

  if (isUpperCase(match[0])) {
    return replacement[0].toUpperCase() + replacement.slice(1);
  }

  return replacement;
});

module.exports = talkLikeAPirate;

},{"./dictionary":1}]},{},[2])(2)
});