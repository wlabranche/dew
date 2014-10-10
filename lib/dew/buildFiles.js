'use strict';

var fs = require( 'fs' );

var makeJS = require( './buildFile/makeJS' ),
    makeCoffee = require( './buildFile/makeCoffee' ),
    jsTest = require( './buildTest/jsTest' ),
    coffeeTest = require( './buildTest/coffeeTest' );

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

};

module.exports = buildFiles;
