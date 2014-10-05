'use strict';

var coffeeTest = function( name ) {
  var file = name + ' = require "./' + name + '.coffee"\n' +
  'expect = require chai\n' +
  '  .expect\n' +
  '\n' +
  'describe "' + name + '", ->\n' +
  '  it "should exist", ->\n' +
  '    expect( ' + name + ' ).to.exist';

  return file;
};

module.exports = coffeeTest;
