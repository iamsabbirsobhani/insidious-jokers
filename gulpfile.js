const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

// Sass Task
function scssTask(){
  return src('./scss/styles.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('./src/assets', { sourcemaps: '.' }));
}

// Watch Task
function watchTask(){;
  watch('./scss/*.scss', series(scssTask));
}

// Default Gulp task
exports.default = series(
  scssTask,
  watchTask
);