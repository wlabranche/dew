'use strict';
var fs = require('fs');

var cast = function(){
  if (process.argv.length > 2){
    var file = process.argv[2].split('.')[0];
    if (fs.existsSync(file + '.js')){
      console.log('file already exists');
    } else {
      fs.writeFileSync(file + '.js', 'module.exports = {}');
      fs.writeFileSync(file + '-test.js', "var " + file + " = require('./" + file + "')");
      console.log('sorcery!');
    }
  }else{
    console.log('specify a file to build');
  }
};

module.exports = cast;