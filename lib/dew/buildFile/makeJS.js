'use strict';

var makeJS = function( name ){
  var file = 'var ' + name + ' = {};\n' +
  '\n' +
  'module.exports = ' + name + '\n';

  return file;
};

module.exports = makeJS;
