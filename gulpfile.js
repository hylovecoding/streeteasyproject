/**
 * Created by HORACE on 2016/12/10.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var scsslint = require('gulp-scss-lint');

gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

gulp.task('scss-lint', function() {
    return gulp.src('./public/sass/*.scss')
        .pipe(scsslint({
            'config': 'lint.yml'
        }));
});

gulp.task('styles', function() {
    gulp.src('./public/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 5%','not ie <= 8','Firefox <= 20'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/stylesheets/'));
});