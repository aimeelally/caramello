'use strict';
var webpackConfig = require("./webpack.config.js");
const LANGUAGE = process.env.npm_config_language || 'en';
const ENV = process.env.npm_config_env || 'live';
const BUILDERJSONPATH = process.env.npm_config_jsontype || 'extended/';
const BUILDERJSONURL = "src/json/" + LANGUAGE + "/builderjson/"+ BUILDERJSONPATH +"/";

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    clean: ["dist/*","src/json/prod/"],
    copy: {
      main: {
        files: [
          {expand: true, cwd: "src/", src: ["index.html", "assets", "data", "builders", "directives", "views"], dest: "dist/"},
          {expand: true, cwd: "src/assets/common/", src: ["**"], dest: "dist/assets/prod/common/"},
          {expand: true, cwd: "src/assets/" + LANGUAGE + "/", src: ["**"], dest: "dist/assets/prod/"},
          {expand: true, cwd: "src/json/" + LANGUAGE + "/", src: ["**","!builderjson/**"], dest: "src/json/prod/"},
          {expand: true, cwd: BUILDERJSONURL, src: ["**"], dest: "src/json/prod/"},
          {expand: true, cwd: "src/views/", src: ["**"], dest: "dist/views/"}, //@aimee: this is so we can reference questions for the quiz, if no other references then just point directly to that folder
          {expand: true, cwd: "src/builders/", src: ["**"], dest: "dist/builders/"},
          {expand: true, cwd: "src/directives/", src: ["**"], dest: "dist/directives/"},
          {
            expand: true,
            cwd: 'src/locale/',
            src: ['locale-'+ LANGUAGE +'.js'],
            dest: 'dist/',
            rename: dest => `${dest}language.js`
          },
          {expand: true, cwd: "src/assets/" + LANGUAGE + "/", src: ["**"], dest: "src/assets/prod/"},
          {expand: true, cwd: "config/build/" + LANGUAGE + "/" , src: [ ENV + ".json"], dest: "src/runtime/"},
        ]
      },
     dist:{
      files: [{expand: true, cwd: "dist/", src: ["**"], dest: "dist/"+ LANGUAGE + "/"}]
     } 
    },
    ngconstant: {
      options: {
        dest: 'src/runtime/configjson.js',
        name: 'configjson',
      },
      dist: {
        constants: "src/runtime/"+ ENV + ".json" 
      },
      values: {
        debug: true
      }
    },
    webpack: {
      options: webpackConfig,
      build: {}
    },
    "webpack-dev-server": {
      options: {
        webpack: webpackConfig,
      },
      start: {}
    }
  });

  grunt.registerTask('build', ['clean', 'copy', 'ngconstant:dist', 'webpack','copy:dist']);
  grunt.registerTask('run', ['clean', 'copy', 'ngconstant:dist', 'webpack-dev-server','copy:dist']);
  grunt.registerTask('default', 'run');
};