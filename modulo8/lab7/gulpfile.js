var gulp = require('gulp'),
    rename = require('gulp-rename'),
     concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('angular-concat', function(){
    gulp.src(['bower_components/angular/angular.min.js','bower_components/ngCordova/dist/ng-cordova.min.js'])
        .pipe(concat('angular-ng-cordova.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('www/js/'))
});

