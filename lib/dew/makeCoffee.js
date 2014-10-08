'use strict';

var makeCoffee = function( name ){
  var file = name + ' = {}\n' +
  '\n' +
  'module.exports = ' + name + '\n';

  return file;
};

module.exports = makeCoffee;
