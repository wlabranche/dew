'use strict';

var findup = require( 'findup-sync' );

var cwd = process.cwd(),
    projectPackage = findup( 'package.json', { cwd: cwd } );


var getExt = function ( targetName ) {
  var ext, parts;
  if ( projectPackage ) {
    if ( projectPackage.config && projectPackage.config.dew ) {
      ext = projectPackage.config.dew.ext;
    }
  }
  if ( !ext ) {
    parts = targetName.split('.');
    if ( parts.length > 1 ) {
      ext = parts.pop();
    } else {
      ext = 'js';
    }
  }
  if ( ext !== 'js' && ext !== 'coffee' ) {
    throw new Error( 'this only works for js and coffee' );
  }
  return ext;
};

module.exports = getExt;
