'use strict';

// add an isDir property?
var fs = require( 'fs' );


var getExt = require( './getExt' );

var parseInput = function ( input, path ) {
  var fullPath = path + '/' + input,
      exists = fs.existsSync( fullPath ),
      isDir = false,
      isTest = false,
      ext = null,
      parts = {},
      nameParts = input.split( '.' ),
      tempTest;

  if ( exists ) {
    isDir = fs.lstatSync( fullPath ).isDirectory();
  }
  if ( !isDir ) {
    ext = getExt( input );
  }
  if ( nameParts[ nameParts.length - 1 ] === ext ) {
    nameParts.pop();
  }
  if ( input.indexOf( 'test' ) > -1 ) {
    if ( nameParts.length > 1 ) {
      // lazy way of handling dot notation
      nameParts.pop();
    } else if ( input.indexOf( '-' ) > -1 ) {
      // lazy way of handling '-test'
      tempTest = nameParts[ 0 ].split( '-' );
      tempTest.pop();
      nameParts[ 0 ] = tempTest.join( '-' );
    }
  }

  // remove 'test' from name, for tdd
  parts.isDir = isDir;
  parts.ext = ext;
  parts.fileName = nameParts.join('.') || null;
  parts.path = path;

  return parts;
};

module.exports = parseInput;
