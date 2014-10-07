'use strict';

var fs = require( 'fs' );

var helpers = {},
    buildSource = 'buildFunctions',
    readSource = 'readFunctions';

var buildFunctions = fs.readdirSync( __dirname + '/' + buildSource ),
    readFunctions = fs.readdirSync( __dirname + '/' + readSource );

// this should be more dynamic
// I don't like repeating this
buildFunctions.forEach( function ( file ) {
  var itemName = file.split( '.' )[0];
  helpers[ itemName ] = require( './' + buildSource + '/' + itemName );
});

readFunctions.forEach( function ( file ) {
  var itemName = file.split( '.' )[0];
  helpers[ itemName ] = require( './' + readSource + '/' + itemName );
});

module.exports = helpers;
