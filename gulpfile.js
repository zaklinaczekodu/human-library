var gulp = require('gulp'),
    clean = require('gulp-clean');
    
gulp.task('default', ['build']);

gulp.task('build', ['clean'], function () {
    return gulp.src('./node_modules/human-library/dist/**/*')
            .pipe(gulp.dest('./'));
});

gulp.task('clean', function () {
    gulp.src(['./assets/', './index.html'], {
        read: false
    }).pipe(clean());
});