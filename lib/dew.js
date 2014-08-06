'use strict';
var fs = require('fs');
var helper = require('./helpFunctions.js');
var suffix;
var file;
var output;
var testFile;

var dew = function(){
  if (process.argv.length > 2){
    file = process.argv[2].split('.')[0];
    suffix = process.argv[2].split('.')[1] || 'js';
    if (suffix !== 'js' && suffix !== 'coffee'){
      console.log('this only works on javscript and coffeescript');
    }else{
      if (fs.existsSync(file + '.' + suffix)){
        console.log('file already exists...');
        if (fs.existsSync(file + '-test.' + suffix)){
          console.log('so does the test, there is nothing for me to d...');
        }else{
          testFile = helper.makeTest(file, suffix);
          fs.writeFileSync(file + '-test.' + suffix, testFile);
          console.log('so I made you a test!');
        }
      } else {
        output = helper.makeFile(file, suffix);
        testFile = helper.makeTest(file, suffix);
        fs.writeFileSync(file + '.' + suffix, output);
        fs.writeFileSync(file + '-test.' + suffix, testFile);
        console.log('sorcery!');
      }
    }
  }else{
    console.log('specify a file to build');
  }
};

var undew = function(){
  if (process.argv.length > 2){
    file = process.argv[2].split('.')[0];
    suffix =process.argv[2].split('.')[1];
    if (fs.existsSync(file + '.' + suffix)){
      fs.unlink(file + '.' + suffix);
      if (fs.existsSync(file + '-test' + '.' + suffix)){
        fs.unlink(file + '-test' + '.' + suffix);
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
