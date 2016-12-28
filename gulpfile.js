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
const typescript = require('gulp-typescript');
const uglify = require('gulp-uglify');
const gzip = require('gulp-gzip');
const watchify = require('watchify');
const ng2TemplateParser = require('gulp-inline-ng2-template/parser');
const exec = require('child_process').exec;
const devTypescriptConfiguration = require('./tsconfig.json');

/* clean tasks */

gulp.task("clean:dist", function () {
    return gulp.src(['./dist/*'], { read: false }).pipe(filter(['**', '!dist/web.config'])).pipe(clean());
});

gulp.task("clean:src", function () {
    return gulp.src(['./src/**/*.js'], { read: false }).pipe(clean());
});

gulp.task("clean:aot", function () {
    return gulp.src(['./aot/*'], { read: false }).pipe(clean());
});

gulp.task("clean:compiled", function (callback) {
    runSequence("clean:src", "clean:aot", callback);
});

gulp.task("clean", function (callback) {
    runSequence("clean:dist", "clean:compiled", callback);
});

/* copy tasks */

gulp.task("html:copy", function () {
    return gulp.src('./src/index.html').pipe(rename({ dirname: '' })).pipe(gulp.dest("./dist"));
});

gulp.task("css:copy", function () {
    return gulp.src('./styles/**/*.css').pipe(rename({ dirname: '' })).pipe(gulp.dest("./dist/styles/"));
});

gulp.task("js:copy", function () {
    return gulp.src('./node_modules/zone.js/dist/zone.min.js').pipe(rename({ dirname: '' })).pipe(gulp.dest("./dist/js/"));
});

gulp.task("fonts:copy", function () {
    return gulp.src('./fonts/**/*').pipe(rename({ dirname: '' })).pipe(gulp.dest("./dist/fonts/"));
});

gulp.task("icons:copy", function () {
    return gulp.src('./src/*.ico').pipe(rename({ dirname: '' })).pipe(gulp.dest("./dist/"));
});

gulp.task("copy", function (callback) {
    runSequence("html:copy", "css:copy", "js:copy", "fonts:copy", "icons:copy", callback);
});

/* browserify tasks */

const browserifyOptions = {
    cache: {},
    packageCache: {},
    entries: ['./src/main.ts'],
    debug: true,
    transform: ["require-globify"]
};

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

function ng2TemplateParserProvider(file) {
    return through2(function (buf, enc, next) {
        ng2TemplateParser({ contents: buf, path: file }, { target: 'es5', useRelativePaths: true })
            ((err, result) => {
                this.push(result);
                process.nextTick(next);
            });
    });
}

gulp.task('browserify:compile', function () {
    return bundleJs(browserify(browserifyOptions).plugin(tsify, devTypescriptConfiguration.compilerOptions).transform(ng2TemplateParserProvider).bundle());
});

gulp.task('browserify:watch', function () {
    const watchObject = browserify(browserifyOptions).plugin(tsify, devTypescriptConfiguration.compilerOptions).transform(ng2TemplateParserProvider).plugin(watchify);

    function update() {
        return bundleJs(watchObject.bundle());
    }

    watchObject.on("update", update);
    watchObject.on("log", gutil.log);

    return update();
});

gulp.task("build:dev", function (callback) {
    runSequence("clean", "copy", "browserify:compile", callback);
});

gulp.task('dev', function (callback) {
    runSequence("build", "browserify:watch", callback);
});

/* AoT tasks */

gulp.task('aot:compile', function (callback) {
    exec('"node_modules/.bin/ngc" -p tsconfig.aot.json', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        callback(err);
    });
});

gulp.task('aot:rollup', function (callback) {
    exec('"node_modules/.bin/rollup" -c rollup-config.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        callback(err);
    });
});

gulp.task("aot", function (callback) {
    runSequence("aot:compile", "aot:rollup", callback);
});

gulp.task("build:aot", function (callback) {
    runSequence("clean", "copy", "aot", "clean:compiled",  callback);
});