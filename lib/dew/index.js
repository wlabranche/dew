'use strict';

var fs = require( 'fs' );

var parseInput = require( './parseInput' ),
    buildFiles = require( './buildFiles' );

var dew = function ( fileList, path ) {

  fileList.forEach( function ( file ) {
    var fileInfo = parseInput( file, path ),
        files;
    if ( fileInfo.isDir ) {
      files = fs.readdirSync( path + '/' + file );
      dew( files, path + '/' + file );
    } else {
      // make files
      buildFiles( fileInfo );
    }
  });

};

module.exports = dew;
