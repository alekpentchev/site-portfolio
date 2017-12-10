var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var babel = require('gulp-babel');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('browserSync' , function() {
    browserSync.init({
        server: {
            baseDir: 'src/',
        },
    })
})

gulp.task('sass' , function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/temp/css'))
        .pipe(browserSync.reload({
            stream: true
          }))
})

gulp.task('babel' , function(){
    return gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('src/temp/js'))
})

gulp.task('autoprefixer' , function() {
    return gulp.src('src/temp/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
        }))
        .pipe(gulp.dest('src/temp/css/'))
})

gulp.task('images', function() {
    return gulp.src('src/img/*.+(png|jpg|gif|svg')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('temp/img'))
})

gulp.task('clean-dist' , function() {
    return del.sync('dist')
})

gulp.task('clean-temp' , function() {
    return del.sync('src/temp')
})

gulp.task('cache:clear', function() {
    return cache.clearAll()
})

gulp.task('watch', ['sass' , 'babel', 'browserSync'], function (){
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/*.html', browserSync.reload); 
    gulp.watch('src/js/**/*.js', browserSync.reload); 
})

gulp.task('dist' , function() {
    runSequence(
        'clean-temp', 'clean-dist', 'babel', 'sass', 'autoprefixer', 'images'
    )
})