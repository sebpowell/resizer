// Load Gulp Dependencies
var gulp = require("gulp"),
		sass = require("gulp-ruby-sass"),
		autoprefixer = require("gulp-autoprefixer"),
		uglify = require("gulp-uglify"),
		concat = require("gulp-concat");

gulp.task('sass', function () {
	return sass('style.sass', { style: 'compact' })
	.on('error', function (err) {
		console.error('Error!', err.message);
	})
	.pipe(autoprefixer("last 2 version", "> 1%"))
	.pipe(gulp.dest(''));
});

gulp.task("uglify", function() {
	gulp.src(["js/**/*.js"])
		.pipe(concat("app.js"))
		.pipe(gulp.dest(""))
});

gulp.task("watch", function() {
	gulp.watch(['style.sass'], ['sass']);
	gulp.watch(['js/**/*.js'], ['uglify']);
});

gulp.task("default", function() {

});