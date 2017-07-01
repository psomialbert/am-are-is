const Inflected = require('inflected');
const pluralize = Inflected.pluralize;
const singularize = Inflected.singularize;

const am = 'am';
const are = 'are';
const is = 'is';

module.exports = function(word) {
  word = String(word).toUpperCase();
  if (word == 'I') {
    return 'am';
  }
  if (word == 'YOU' || word == 'WE' || word == 'THEY') {
    return are;
  }

  var singularizedWord = singularize(word).toUpperCase();
  if (singularizedWord == word) {
    return is;
  }

  var pluralizedWord = pluralize(word).toUpperCase();
  if (pluralizedWord == word) {
    return are;
  }

  throw `Neither am, are or is: ${word}`;
};
