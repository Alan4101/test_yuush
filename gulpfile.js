var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleancss = require('gulp-clean-css');
var image = require('gulp-image');


var paths = {
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'assets/style/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'assets/scripts/'
    },
    imgs:{
        src: 'src/img/**/*.*',
        dest: 'assets/img/'
    }
};

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(cleancss())
        .pipe(rename({
            basename: 'main'
        }))
        .pipe(gulp.dest(paths.styles.dest))
}

function scripts() {
    return gulp.src([
        'node_modules/babel-polyfill/dist/polyfill.js',
        paths.scripts.src
    ],  { sourcemaps: true })
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest))
}
function img() {
    return gulp.src(paths.imgs.src)
        .pipe(image())
        .pipe(gulp.dest(paths.imgs.dest))
}

function watch() {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.imgs.src, img);
}

exports.sctipts = scripts;
exports.img = img;
exports.styles = styles;
exports.watch = watch;