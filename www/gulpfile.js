'use strict';
 
var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
  });
});

gulp.task('sassConvert', function () {
  return gulp.src('./template/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest(function(file){
     return file.base;
    }))
});

gulp.task('main-jsOptimize', function () {
  return gulp.src(['./template/header-page/**/*.js','./template/footer-page/**/*.js','./template/main-page/**/*.js','./template/*.js'])
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
    .pipe(gulp.dest('./optimized/js-min/'))
});

gulp.task('catalog-jsOptimize', function () {
  return gulp.src(['./template/header-page/**/*.js','./template/footer-page/**/*.js','./template/*.js'])
    .pipe(uglify())
    .pipe(concat('catalog.js'))
    .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
    .pipe(gulp.dest('./optimized/js-min/'))
});

gulp.task('cssOptimize', function() {
    return gulp.src('./template/**/*.css') // Выбираем файл для минификации
        .pipe(concat('style.css'))
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('./optimized/css-min/')); // Выгружаем в папку app/css
});

gulp.task('imgOptimize', function() {
    return gulp.src('./images/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('./optimized/img-min/')); // Выгружаем на продакшен
});

gulp.task('watch',['browserSync', 'sassConvert', 'cssOptimize','imgOptimize','main-jsOptimize','catalog-jsOptimize'], function () {
  gulp.watch('./template/**/*.scss', ['sassConvert']);
  gulp.watch('./template/**/*.css', ['cssOptimize']);
  gulp.watch(['./template/header-page/**/*.js','./template/footer-page/**/*.js','./template/main-page/**/*.js','./template/*.js'], ['main-jsOptimize']);
  gulp.watch(['./template/header-page/**/*.js','./template/footer-page/**/*.js','./template/*.js'], ['catalog-jsOptimize']);
  gulp.watch('./images/**/*', ['imgOptimize']);
  gulp.watch('./*.html', browserSync.reload);  
  gulp.watch('./*.php', browserSync.reload);
  gulp.watch('./optimized/css-min/*.css', browserSync.reload);  
  gulp.watch('./optimized/**/*.js', browserSync.reload); 
  gulp.watch('./images/**/*', browserSync.reload);
});