'use strict';

var path = require( 'path' );
var fs = require( 'fs' );
var helpers = {};

helpers.coffeeTest = function( name ){
  var file = name + ' = require "./' + name + '.coffee"\n' +
  'expect = require chai.expect\n' +
  '\n' +
  'describe "' + name + '", ->\n' +
  '  it "should exist", ->\n' +
  '    expect( ' + name + ' ).to.exist';

  return file;
};

helpers.makeCoffee = function( name ){
  var file = 'module.exports = {}';

  return file;
};

helpers.jsTest = function( name ){
  var file = 'var ' + name + ' = require( "./' + name + '.js" );\n' +
  'var expect = require("chai").expect;\n' +
  '\n' +
  'describe( "' + name + '", function() {\n' +
  '  it( "should exist", function() {\n' +
  '    return expect( ' + name + ' ).to.exist;\n' +
  '  } );\n' +
  '} );';

  return file;
};

helpers.makeJS = function( name ){
  var file = 'module.exports = {}';

  return file;
};

module.exports = helpers;
