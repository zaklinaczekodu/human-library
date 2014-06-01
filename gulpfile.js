var gulp = require('gulp'),
    clean = require('gulp-clean');
    
gulp.task('default', ['build']);

gulp.task('build', ['clean'], function () {
    return gulp.src('./node_modules/human-library/dist/**/*')
            .pipe(gulp.dest('./new/'));
});

gulp.task('clean', function () {
    return gulp.src('./new/', {
        read: false
    }).pipe(clean());
});
