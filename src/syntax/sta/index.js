'use strict';

// Syntax by Scottish Tartans Authority

var parse = require('../../parse');
var process = require('../../process');

function factory(options, processors) {
  return parse([
    parse.color({
      allowLongNames: true,
      valueAssignment: 'require',
      colorPrefix: 'none',
      allowShortFormat: false,
      comment: 'allow',
      semicolonBeforeComment: 'allow',
      semicolonAtTheEnd: 'require'
    }),
    parse.stripe({
      allowLongNames: true
    }),
    parse.pivot({
      allowLongNames: true
    })
  ], options, process([
    process.optimize({
      forceSquareBrackets: false
    })
  ].concat(_.isArray(processors) ? processors : [])));
}

module.exports = factory;
