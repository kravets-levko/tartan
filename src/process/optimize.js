'use strict';

var defaults = require('../defaults');
var processing = require('./index');

var optimize = null;

module.exports = function() {
  if (!optimize) {
    optimize = processing([
      processing.removeTokens(defaults.insignificantTokens),
      processing.removeEmptySquareBrackets(),
      processing.mergeStripes(),
      processing.matchSquareBrackets()
    ], {
      runUntilUnmodified: true
    });
  }
  return optimize;
};
