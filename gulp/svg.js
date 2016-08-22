'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');
var svgSprite = require("gulp-svg-sprites");

var $ = require('gulp-load-plugins')();

gulp.task('sprites', function () {
    return gulp.src(conf.paths.src + 'assets/svg/*.svg')
        .pipe(svgSprite())
        .pipe(gulp.dest("assets"));
});