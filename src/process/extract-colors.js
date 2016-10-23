'use strict';

var _ = require('lodash');
var utils = require('../utils');
var processingUtils = require('./utils');

var defaultOptions = {
  keepColorTokens: false
};

function process(tokens, sett, options) {
  var isModified = false;
  var colors = _.extend({}, sett.colors);
  var result = _.filter(tokens, function(token) {
    if (utils.isColor(token)) {
      if (token.color != colors[tokens.name]) {
        isModified = true;
        colors[token.name] = token.color;
      }
      return options.keepColorTokens;
    }
    return true;
  });

  if (isModified) {
    sett.colors = utils.normalizeColorMap(colors);
  }

  return processingUtils.makeProcessorResult(result, isModified);
}

function factory(options) {
  options = _.extend({}, defaultOptions, options);
  // Little hack: this function is not intended for such purposes,
  // but if there is at least one `color` token - we will return new
  // array (even with the same tokens) so it will be detected as modified.
  // Also we can modify sett since it is copied in createSimpleProcessor()
  return processingUtils.createSimpleProcessor(function(tokens, sett) {
    return process(tokens, sett, options);
  });
}

module.exports = factory;
