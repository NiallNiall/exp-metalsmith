// Include gulp
var gulp = require('gulp');
var metalsmith = require('gulp-metalsmith');
var layouts = require('metalsmith-layouts');

gulp.task('metalsmith', function() {
  return gulp.src('src/**')
    .pipe(metalsmith({
        use: [layouts({engine: 'swig'})],
        json: true
    }

        ))
    .pipe(gulp.dest('build'));
});


gulp.task('default', ['metalsmith']);
