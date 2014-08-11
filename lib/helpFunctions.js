'use strict';
var path = require('path');
var fs = require('fs');
var helpers = {};
var file;

var coffeeTest = function(name){
  file = name + ' = require "./' + name + '.coffee"\n' +
  'expect = require chai.expect\n' +
  '\n' +
  'describe "' + name + '", ->\n' +
  '  it "should exist", ->\n' +
  '    expect( ' + name + ' ).to.exist';

  return file;
};
var makeCoffee = function(name){
  file = 'module.exports = {}';

  return file;
};
var jsTest = function(name){
  file = 'var ' + name + ' = require("./' + name + '.js");\n' +
  'var expect = require("chai").expect;\n' +
  '\n' +
  'describe("' + name + '", function(){\n' +
  '  it("should exist", function(){\n' +
  '    return expect(' + name + ').to.exist;\n' +
  '  });' +
  '});';

  return file;
};
var makeJS = function(name){
  file = 'module.exports = {}';

  return file;
};

helpers.makeTest = function(name, suffix) {
  if (suffix === 'js'){
    return jsTest(name);
  }else if(suffix === 'coffee'){
    return coffeeTest(name);
  }else{
    console.log('something has gone horribly wrong');
  }
};

helpers.makeFile = function(name, suffix) {
  if (suffix === 'js'){
    return makeJS(name);
  }else if(suffix === 'coffee'){
    return makeCoffee(name);
  }else{
    console.log('not sure how you did it, but you broke everything. Great job...');
  }
};

module.exports = helpers;
