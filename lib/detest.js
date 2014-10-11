'use strict';

var fs = require( 'fs' ),
    path = require( 'path' );

var detest = function() {
  var file, suffix, full;

  if ( process.argv.length > 2 ) {
    file = process.argv[2].split( '.' )[0];
    suffix = process.argv[2].split( '.' )[1] || 'js';
    full = file + '-file' + '.' + suffix;
    if (fs.existsSync( file + '-test' + '.' + suffix ) ) {
      fs.unlinkSync(file + '-test' + '.' + suffix);
      console.log( 'the test shoudld be gone' );
    } else {
      console.log( 'there isn\'t a test for that...' );
    }
  } else {
    // in the future this may want to ask about removing all tests from dir
    console.log( 'you need to want to destroy something...' );
  }
};

module.exports = detest;
