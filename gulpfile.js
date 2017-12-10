var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var babel = require('gulp-babel');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');
var processhtml = require('gulp-processhtml');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename')

gulp.task('browserSync' , function() {
    browserSync.init({
        server: {
            baseDir: 'src/',
        },
    })
})

gulp.task('sass-minify' , function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(gulp.dest('src/temp/css'))
        .pipe(browserSync.reload({
            stream: true
          }))
})

gulp.task('babel-uglify' , function(){
    return gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
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
    return gulp.src('src/img/**/*')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/img'))
})

gulp.task('processhtml' , function() {
    return gulp.src('src/*.html')
        .pipe(processhtml())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
})

gulp.task('move-styles' , function() {
    return gulp.src('src/temp/css/*.css')
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('dist/css'))
})

gulp.task('move-scripts' , function() {
    return gulp.src('src/temp/js/*.js')
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('dist/js'))
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
        'clean-dist', 'babel-uglify', 'sass-minify', 'autoprefixer', 'images', 'move-styles', 'move-scripts', 'processhtml', 'clean-temp'
    )
})