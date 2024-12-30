const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');

const paths = {
  scss: './style.scss',
  css: './',
};

function styles() {
  return gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.css));
}

function watchFiles() {
  gulp.watch(paths.scss, styles);
}

exports.styles = styles;
exports.watch = gulp.series(styles, watchFiles);
