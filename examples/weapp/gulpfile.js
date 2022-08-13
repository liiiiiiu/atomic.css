let gulp = require('gulp')
let postcss = require('gulp-postcss')
let uncss = require('postcss-uncss')

gulp.task('uncss', function () {
  let plugins = [
    uncss({
      html: ['pages/**/*.wxml']
    }),
  ]
  return gulp.src('./atom.min.wxss')
    .pipe(postcss(plugins))
    // 在dist目录生成新的文件
    .pipe(gulp.dest('./dist'))
})