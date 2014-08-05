'use strict';
var fs = require('fs');

var dew = function(){
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

var undew = function(){
  if (process.argv.length > 2){
    var file = process.argv[2].split('.')[0];
    if (fs.existsSync(file + '.js')){
      fs.unlink(file + '.js');
      if (fs.existsSync(file + '-test.js')){
        fs.unlink(file + '-test.js');
      };
      console.log('they should be gone forever');
    }else{
      console.log('that doesn\'t exist... so... DONE!');
    }
  }else{
    console.log('input something for me to banish, please');
  }
};


module.exports.dew = dew;
module.exports.undew = undew;