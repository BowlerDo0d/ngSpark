'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (done) {
  runSequence(
    'clean',
    'lint',
    'icons',
    'templateCache',
    ['build:js', 'build:css'],
    'source:html',
    'inject',
    done
  );
});
