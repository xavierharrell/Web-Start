var gulp = require('gulp');
var svg2png = require('gulp-svg2png');
var config = require('../config').svgpng;
var images = require('../config').images;

gulp.task('svgpng', function() {
    return gulp.src(config.src)
    	.pipe(svg2png())
    	.pipe(gulp.dest(config.dest));
});