'use strict';

var fs = require( 'fs' );

var parseInput = require( './parseInput' ),
    buildFiles = require( './buildFiles' );

var dew = function ( fileList, path ) {

  fileList.forEach( function ( file ) {
    var fileInfo = parseInput( file, path );
    if ( fileInfo.isDir ) {
      dew( fs.readdirSync( path + '/' + file ), path + '/' + file );
    } else {
      // make files
      buildFiles( fileInfo );
    }
  });

};

module.exports = dew;
