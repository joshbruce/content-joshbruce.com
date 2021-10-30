const gulp = require("gulp");

const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const discardComments = require("postcss-discard-comments");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-dart-scss");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("default", (done) => {
  console.log('gulp sass: Compiles the CSS');
  console.log('gulp javascript: Compiles the JavaScript');
	done();
});

/**
 * See the USWDS
 */
gulp.task("sass", (done) => {
  const pluginsProcess = [discardComments(), autoprefixer()];
  const pluginsMinify = [csso({ forceMediaMerge: false })];

  gulp
    .src('styles/sass/main.scss')
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(
      sass({ outputStyle: "expanded" })
      .on("error", () => { console.log('ERROR: while compiling Sass') }))
    .pipe(postcss(pluginsProcess))
    .pipe(gulp.dest("./styles"))
    .pipe(postcss(pluginsMinify))
    .pipe(rename({suffix: ".min"}))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./styles"));
  done();
});

gulp.task("watch", () => {
  gulp.watch("styles/**/*.scss", gulp.series("sass"));
  return;
});
