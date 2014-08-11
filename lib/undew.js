'use strict';

var fs = require( 'fs' );

module.exports = function() {
  var file, suffix;
  if ( process.argv.length > 2 ){
    file = process.argv[2].split( '.' )[0];
    suffix = process.argv[2].split( '.' )[1] || 'js';
    if ( fs.existsSync(file + '.' + suffix )){
      fs.unlinkSync( file + '.' + suffix );
      if ( fs.existsSync( file + '-test' + '.' + suffix ) ){
        fs.unlinkSync( file + '-test' + '.' + suffix );
      };
      console.log( 'they should be gone forever' );
    }else{
      console.log( 'that doesn\'t exist... so... DONE!' );
    }
  }else{
    console.log( 'input something for me to banish, please' );
  }
};
