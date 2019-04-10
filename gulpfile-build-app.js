// npm install gulp && npm install gulp-sass && npm install gulp-clean
// gulp --gulpfile gulpfile-build-app.js

'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');

gulp.task('copy-files', function() {
	return gulp.src([
		'!src/**/*.{sass,scss}',
		'src/**/*'
	]).pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
	return gulp.src('src/**/*.{sass,scss}')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist'))
});

gulp.task('clean-dist', function() {
	return gulp.src('dist', {
		read: false,
		allowEmpty: true
	})
		.pipe(clean());
});

gulp.task('default', gulp.series('clean-dist', 'sass', 'copy-files'));
