'use strict';

var gulp = require('gulp');
var validatePipeline = require('pipeline-validate-js')();
var testPipeline = require('pipeline-test-node')({
  plugins: {
    istanbul: {
      thresholds: {
        global: 80
      }
    }
  }
});

var config = {
  jsFiles: [
    './*.js',
    'src/**/*.js',
    'test/**/*.js'
  ]
};

gulp.task('build', function() {
  gulp
    .src(config.jsFiles)
    .pipe(validatePipeline.validateJS())
    .pipe(testPipeline.test());
});