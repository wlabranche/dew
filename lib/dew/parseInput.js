'use strict';

// add an isDir property?
var fs = require( 'fs' );


var getExt = require( './getExt' );

var parseInput = function ( input, path ) {
  var fullPath = path + '/' + input,
      exists = fs.existsSync( fullPath ),
      isDir = false,
      ext = null,
      parts = {},
      nameParts = input.split( '.' ),
      testCheck;

  if ( exists ) {
    isDir = fs.lstatSync( fullPath ).isDirectory();
  }
  if ( !isDir ) {
    ext = getExt( input );
  }

  if ( nameParts[ nameParts.length - 1 ] === ext ) {
    nameParts.pop();
  }

  parts.isDir = isDir;
  parts.ext = ext;
  parts.fileName = nameParts.join('.');
  parts.path = path + '/';

  return parts;
};

module.exports = parseInput;
