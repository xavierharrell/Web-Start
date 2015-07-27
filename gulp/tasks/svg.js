var changed = require('gulp-changed');
var gulp = require('gulp');
var config = require('../config').svg;
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');


gulp.task('svg', function(){
	return gulp.src(config.src)
	 .pipe(changed(config.src)) // Ignore unchanged files
	 .on('error', handleErrors)
	.pipe(gulp.dest(config.dest))
	.pipe(browserSync.reload({stream:true}));
});