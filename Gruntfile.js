'use strict';

var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function(connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    appConfig: {
      app: 'src',
      dist: 'dist'
    },
    watch: {
      coffee: {
        files: ['<%= appConfig.app %>/js/{,*/}*.coffee'],
        tasks: ['coffee:dist']
      },
      livereload: {
        files: [
          '<%= appConfig.app %>/*.html',
          '<%= appConfig.app %>/css/{,*/}*.css',
          '<%= appConfig.app %>/js/{,*/}*.js',
          '<%= appConfig.app %>/images/{,*/}*.{png,jpg,jpeg,webp}'],
        tasks: ['livereload']
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
            lrSnippet,
            mountFolder(connect, 'src') //can't use config here!?!
            ];
          }
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
      }
    },
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= appConfig.app %>/js',
          src: '*.coffee',
          dest: '<%= appConfig.app %>/js',
          ext: '.js'
        }]
      }
    },
  });

  grunt.renameTask('regarde', 'watch');

  grunt.registerTask('default', function(target) {
    grunt.task.run([
      'coffee:dist',
      'livereload-start',
      'connect:livereload',
      'open',
      'watch']);
  });
};
