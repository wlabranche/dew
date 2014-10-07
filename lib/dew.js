'use strict';

var fs = require( 'fs' );

var makeFile = require( './makeFile.js' ),
    makeTest = require( './makeTest.js' ),
    testDir = require( './dirTest.js' );

// should take args
// not really scalable in its current form
module.exports = function( file, suffix ) {
  var output, testFile;
  // this is already handled
  if ( suffix !== 'js' && suffix !== 'coffee' ){
    console.log( 'this only works on javscript and coffeescript' );
  } else {
    if ( fs.existsSync( file ) &&
         fs.lstatSync( './' + file ).isDirectory() ) {
      testDir( './' + file );
    } else if ( fs.existsSync( file + '.' + suffix ) ){
      console.log( 'file already exists...' );
      if ( fs.existsSync( file + '-test.' + suffix ) ){
        console.log( 'so does the test, there is nothing for me to d...' );
      } else {
        testFile = makeTest( file, suffix );
        fs.writeFileSync( file + '-test.' + suffix, testFile );
        console.log( 'so I made you a test!' );
      }
    } else {
      output = makeFile( file, suffix );
      testFile = makeTest( file, suffix );
      fs.writeFileSync( file + '.' + suffix, output );
      fs.writeFileSync( file + '-test.' + suffix, testFile );
      console.log( 'sorcery!' );
    }
  }
};
