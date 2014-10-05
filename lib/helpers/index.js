'use strict';

var fs = require( 'fs' );

var helpers = {},
    source = 'buildFunctions';

var buildFunctions = fs.readdirSync( __dirname + '/' + source );

buildFunctions.forEach( function ( file ) {
  var itemName = file.split( '.' )[0];
  helpers[ itemName ] = require( './' + source + '/' + itemName );
});

module.exports = helpers;
