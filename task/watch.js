const gulp = require('gulp')
const path = require('path')

const {
  sourceDir,
  libDir
} = require('./base')

const {
  cleanDest,
  cleanAttemp
} = require('./clean')

const {
  injectAttemp
} = require('./inject')

const {
  compileSource,
  compileAttemp,
  minifySource
} = require('./compile')

// 执行 gulp 监听任务
function watchSourceChange(cb) {
  gulp.watch(
    [
      path.join(sourceDir, '/**/*.scss'),
      path.join(libDir, '/**/*.scss')
    ],

    gulp.series(
      cleanDest,

      compileSource,

      compileAttemp,

      injectAttemp,

      cleanAttemp,

      minifySource
    )
  )
}

module.exports = {
  watchSourceChange
}