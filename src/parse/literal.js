'use strict';

var _ = require('lodash');
var utils = require('../utils');

var defaultOptions = {
  string: '',
  ignoreCase: false
};

function parser(str, offset, options) {
  if (options.string != '') {
    var s = str.substr(offset, options.string.length);
    var q = options.ignoreCase ? s.toUpperCase() : s;
    if (q == options.string) {
      return {
        type: utils.TokenType.literal,
        value: s,
        length: s.length
      };
    }
  }
}

function factory(options) {
  options = _.extend({}, defaultOptions, options);
  if (!_.isString(options.string)) {
    options.string = '';
  }
  if (options.ignoreCase) {
    options.string = options.string.toUpperCase();
  }
  return function(str, offset) {
    return parser(str, offset, options);
  };
}

module.exports = factory;
