'use strict';

var fs = require('fs');
var path = require('path');
var helpers = require('./helpFunctions.js');

// make file
module.exports = function(name, suffix) {
  if (suffix === 'js'){
    return helpers.makeJS(name);
  }else if(suffix === 'coffee'){
    return helpers.makeCoffee(name);
  }else{
    console.log('not sure how you did it, but you broke everything. Great job...');
  }
};