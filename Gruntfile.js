/*global module:false*/

module.exports = function (grunt) {
  'use strict';
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-svgstore');

  // Project configuration.

  var config = {
    // -----------------------------------
    // SASS compiling tasks
    // -----------------------------------
    sass: {
      // ----------------------------------------
      // sass:dist - compressed & minified
      // ----------------------------------------
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
          noCache: true
        },
        files: {
          // ----------------------------------------
          // Project
          // ----------------------------------------
          'dist/css/style.min.css': 'src/scss/main.scss',
          'dist/css/light.min.css': 'src/scss/_themes/light.scss',
          'dist/css/dark.min.css': 'src/scss/_themes/dark.scss'
        }
      },
      // -----------------------------------------
      // sass:dev - including sourcemaps, expanded
      // -----------------------------------------
      dev: {
        options: {
          style: 'expanded',
          sourcemap: 'inline',
          noCache: true
        },
        files: {
          // ----------------------------------------
          // Project
          // ----------------------------------------
          'dist/css/style.min.css': 'src/scss/main.scss',
          'dist/css/light.min.css': 'src/scss/_themes/light.scss',
          'dist/css/dark.min.css': 'src/scss/_themes/dark.scss'
        }
      }
    },
    // -----------------------------------
    // Watch task takes care about changes
    // -----------------------------------
    watch: {
      // -----------------------------------
      // watch:css watches css for changes
      // -----------------------------------
      css: {
        files: ['src/scss/**/*'],
        tasks: ['sass:dev'],
        options: {
          // ------------------------------------------------------------
          // Refresh the browser when changes are done.
          // If 'true', copy line below to the head of html document
          // ------------------------------------------------------------
          // <script src="http://localhost:35729/livereload.js"></script>
          // ------------------------------------------------------------
          livereload: true,
        }
      },
      view: {
        files: ['src/view/**/*'],
        tasks: ['copy:view'],
        options: {
          // ------------------------------------------------------------
          // Refresh the browser when changes are done.
          // If 'true', copy line below to the head of html document
          // ------------------------------------------------------------
          // <script src="http://localhost:35729/livereload.js"></script>
          // ------------------------------------------------------------
          livereload: true,
        }
      },
    },
    // -------------------------------------------
    // Copy task copies the files where we want to
    // -------------------------------------------
    copy: {
      view: {
        cwd: 'src/view', // set working folder / root to copy
        src: '**/*', // copy all files and subfolders
        dest: 'dist/view', // destination folder
        expand: true // required when using cwd
      }
    },
    // ----------------------------------------
    // Run server
    // ----------------------------------------
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'dist/'
        }
      }
    }
  };

  grunt.initConfig(config);

  // ------------------------------------------------
  // Run Forrest, run!
  // ------------------------------------------------
  grunt.registerTask('default', 'prod');
  grunt.registerTask('dev', ['sass:dev', 'copy', 'watch']);
  grunt.registerTask('prod', ['sass:dist', 'copy']);
  grunt.registerTask('server', ['sass:dev', 'copy','connect:server:keepalive']);
};