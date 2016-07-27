// Include gulp
var gulp = require('gulp');
    connect = require('connect'),
    serveStatic = require('serve-static'),
    connectLivereload = require('connect-livereload'),
    gulpLivereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer');

var	metalsmith = require('gulp-metalsmith'),
    layouts = require('metalsmith-layouts');

gulp.task('metalsmith', function() {
  return gulp.src('content/**')
    .pipe(metalsmith({
        use: [layouts({engine: 'swig'})],
        json: true
        }
    ))
    .pipe(gulp.dest('build'));
});

// Set up ports
var localPort = 4000,
       lrPort = 35729;


// Function to set up Server
gulp.task('server', function(){
  var server = connect();

  server.use(connectLivereload({port: lrPort}));
  server.use(serveStatic('build'));
  server.listen(localPort);

  console.log("\nlocal server running at http://localhost:" + localPort + "/\n");
});

gulp.task('sass', function(){
  gulp.src('sass/**/*.scss')
    .pipe(sass({
      outputStyle: [ 'expanded' ],
      sourceComments: 'normal'
    }).on('error', sass.logError))
    .pipe(prefix())
    .pipe(gulp.dest('build/css'))
    .pipe(gulpLivereload());
})

gulp.task('watch', function(){
  gulp.watch(['layouts/**', 'content/**'], ['metalsmith']);
  gulp.watch('sass/**/*.scss', ['sass']);

  gulpLivereload.listen();
})


gulp.task('default', ['server', 'watch']);
