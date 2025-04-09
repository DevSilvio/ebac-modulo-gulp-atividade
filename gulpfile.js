const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');
const imgjpeg = require('imagemin-mozjpeg');
const {deleteAsync} = require('del');
const imgpng = require('imagemin-pngquant');
const { exec } = require('child_process');

function comprimeSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

function comprimeJs() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'));
}

function comprimeImages() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'))
    }
    
function limpaBuild() {
    return deleteAsync(['./build']);
}

exports.limpaBuild = limpaBuild;
exports.default = gulp.series(comprimeSass,comprimeJs,comprimeImages);
