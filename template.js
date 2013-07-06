/*global exports */

(function ( exports, child_process ) {

  'use strict';

  // Basic template description.
  exports.description = 'Create a Sapient Greenhorn basic structure';

  // Template-specific notes to be displayed before question prompts.
  exports.after = 'Now, install project dependencies with _npm install_. This will download grunt and the plugins this project uses. For further instructions check the README.md_';

  // Any existing file or directory matching this wildcard will cause a warning.
  exports.warnOn = '*';

  // The actual init template.
  exports.template = function(grunt, init, done) {

    var options, prompts, complete, getDefaultPath;

    options = {};
    prompts = [];


    getDefaultPath = function ( date, name ) {
      var months = [ 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec' ];
      return [ date.getFullYear(), months[ date.getMonth() ], name ].join( '/' );
    };


    complete = function ( err, props ) {
      var files;

      // timestamp
      props.timestamp = new Date();

      // default path
      props.path = getDefaultPath( props.timestamp );

      files = init.filesToCopy( props );

      init.copyAndProcess( files, props );
      done();
    };

    init.process( options, prompts, complete );

  };

}( exports, require( 'child_process' ) ) );