/**
* gulpfile.js
*
* Task definitions for gulp.
*
*/

//================
// Package import
//================

const gulp       = require('gulp');
const babel      = require('gulp-babel');
const sass       = require('gulp-sass');
const concat     = require('gulp-concat');
const uglify     = require('gulp-uglify');
const clean      = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const nodemon    = require('gulp-nodemon');
const watch      = require('gulp-watch');
const del        = require('del');

//===========
// Variables
//===========

const angular = [
];

const venodr = angular.concat([
]);

//==================
// High level tasks
//==================

gulp.task('default', ['build', 'serve', 'watch']);
gulp.task('build', ['compile', 'move']);
gulp.task('clean', ()=>del(['dist']));

gulp.task('compile', ['compile:js', 'compile:sass']);
gulp.task('compile:js', ['compile:js:server', 'compile:js:client']);

gulp.task('move', ['move:assets', 'move:html']);

//=================
// Low level tasks
//=================

/* ===== Compile ===== */

gulp.task('compile:js:server', ()=>{
});

gulp.task('compile:js:client', ()=>{
});

gulp.task('compile:sass', ()=>{
});

/* ===== Move ===== */

gulp.task('move:assets', ()=>{
});

gulp.task('move:html', ()=>{
});

/* ===== Serve & Watch ===== */

gulp.task('serve', ()={
});

gulp.task('watch', ()={
});
