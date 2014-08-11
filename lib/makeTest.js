'use strict';

var fs = require( 'fs' );
var path = require( 'path' );
var helpers = require( './helpFunctions.js' );

// make test
module.exports = function( name, suffix ) {
  if ( suffix === 'js' ){
    return helpers.jsTest( name );
  } else if ( suffix === 'coffee' ){
    return helpers.coffeeTest( name );
  } else {
    console.log( 'something has gone horribly wrong' );
  }
};