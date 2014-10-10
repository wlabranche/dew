'use strict';

var jsTest = function( name ){
  var file = 'var ' + name + ' = require( \'./' + name + '.js\' );\n' +
  '\n' +
  'var mocha = require( \'mocha\' ),\n' +
  '    expect = require( \'chai\' ).expect;\n' +
  '\n' +
  'describe( \'' + name + '\', function() {\n' +
  '  it( \'should exist\', function() {\n' +
  '    return expect( ' + name + ' ).to.exist;\n' +
  '  });\n' +
  '});\n';

  return file;
};

module.exports = jsTest;
