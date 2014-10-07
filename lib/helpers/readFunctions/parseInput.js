'use strict';

var parseInput = function ( inputString ) {
  var parts = {};

  parts.fileName = inputString.split( '.' )[ 0 ];
  parts.extension = inputString.split( '.' )[ 1 ] || 'js';

  return parts;
};

module.exports = parseInput;
