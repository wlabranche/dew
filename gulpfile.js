var gulp = requrie('gulp');

gulp.task('test', function(){
  console.log('all tests passed because there are no tests');
});

gulp.task('default', ['test']);