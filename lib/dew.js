'use strict';

var fs = require('fs');
var helper = require('./helpFunctions.js');

var dew = function(){
  var file, suffix, output, testFile;
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

module.exports = dew;
