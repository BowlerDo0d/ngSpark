'use strict';

var gulp        = require('gulp');
var sourcemaps  = require('gulp-sourcemaps');
var sass        = require('gulp-sass');

var CacheBuster = require('gulp-cachebust');
var cachebust   = new CacheBuster();

gulp.task('build-css', function() {
  return gulp.src('./sass/*')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(cachebust.resources())
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./public/css'));
});
