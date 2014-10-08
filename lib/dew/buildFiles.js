'use strict';

var fs = require( 'fs' );

var makeJS = require( './makeJS' ),
    makeCoffee = require( './makeCoffee' ),
    jsTest = require( './jsTest' ),
    coffeeTest = require( './coffeeTest' );

var buildFiles = function ( fileData ) {

  var filePath = fileData.path + fileData.fileName + '.' + fileData.ext,
      testPath = fileData.path + fileData.fileName + '-test.' + fileData.ext,
      mainFile = fs.existsSync( filePath ),
      testFile = fs.existsSync( testPath ),
      resultFile, resultTest;

  if ( !mainFile ) {
    if ( fileData.ext === 'coffee' ) {
      resultFile = makeCoffee( fileData.file );
    } else {
      resultFile = makeJS( fileData.file );
    }
    fs.writeFileSync( filePath, resultFile );
    console.log( 'wrote ' + fileData.fileName + '.' + fileData.ext );
  }
  if ( !testFile ) {
    if ( fileData.ext === 'coffee' ) {
      resultTest = coffeeTest( fileData.file );
    } else {
      resultTest = jsTest( fileData.file );
    }
    fs.writeFileSync( testPath, resultTest );
    console.log( 'wrote ' + fileData.fileName + '-test.' + fileData.ext );
  }
  // parse should attempt remove all 'test' references from the name
  //
};

module.exports = buildFiles;
