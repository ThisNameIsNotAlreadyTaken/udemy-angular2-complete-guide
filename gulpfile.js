'use strict';

const gulp = require('gulp');
const debug = require("gulp-debug");
const runSequence = require("run-sequence");
const cache = require('gulp-cached');
const through2 = require('through2');
const gutil = require('gulp-util');
const clean = require("gulp-clean");
const filter = require('gulp-filter');
const browserify = require('browserify');
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const sourcemaps = require("gulp-sourcemaps");
const rename = require('gulp-rename');
const tsify = require('tsify');
const uglify = require('gulp-uglify');
const gzip = require('gulp-gzip');
const watchify = require('watchify');
const ng2TemplateParser = require('gulp-inline-ng2-template/parser');

gulp.task("clean", function () {
    return gulp.src(['./dist/*'], { read: false }).pipe(filter(['**', '!dist/web.config'])).pipe(clean({ force: true }));
});

gulp.task("html:copy", function () {
    return gulp.src('./src/*.html').pipe(rename({ dirname: '' })).pipe(gulp.dest("./dist"));
});

gulp.task("css:copy", function () {
    return gulp.src('./styles/**/*.css').pipe(rename({ dirname: '' })).pipe(gulp.dest("./dist/styles/"));
});

gulp.task("fonts:copy", function () {
    return gulp.src('./fonts/**/*').pipe(rename({ dirname: '' })).pipe(gulp.dest("./dist/fonts/"));
});

gulp.task("icons:copy", function () {
    return gulp.src('./src/*.ico').pipe(rename({ dirname: '' })).pipe(gulp.dest("./dist/"));
});

const browserifyOptions = {
    cache: {},
    packageCache: {},
    entries: ['./src/main.ts'],
    debug: true,
    transform: ["require-globify"]
};

const ng2TemplateParserOptions = {
    target: 'es5', 
    useRelativePaths: true
};
 
function ng2TemplateParserProvider(file) {
  return through2(function (buf, enc, next){
    ng2TemplateParser({contents: buf, path: file}, ng2TemplateParserOptions)((err, result) => {
      this.push(result);
      process.nextTick(next);
    });
  });
}

function bundleJs(bundle) {
    return bundle.on("error", function (err) {
        gutil.log(
            gutil.colors.red("Browserify compile error:"),
            err.message
        );
        this.emit("end");
    }).pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./dist/js/'));
}

gulp.task('browserify:compile', function () {
    return bundleJs(browserify(browserifyOptions).plugin(tsify, { noImplicitAny: true }).transform(ng2TemplateParserProvider).bundle());
});

gulp.task('browserify:watch', function () {
    const watchObject = browserify(browserifyOptions).plugin(tsify, { noImplicitAny: true }).transform(ng2TemplateParserProvider).plugin(watchify);

    function update() {
        return bundleJs(watchObject.bundle());
    }

    watchObject.on("update", update);
    watchObject.on("log", gutil.log);

    return update();
});

gulp.task("build", function (callback) {
    runSequence("clean", "html:copy", "css:copy", "fonts:copy", "icons:copy","browserify:compile", callback);
});

gulp.task('default', function (callback) { 
    runSequence("build", "browserify:watch", callback); }
);