const gulp = require('gulp')
const path = require('path')

const {
  rootDir
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
  compileAttemp
} = require('./compile')

const {
  minifyBreakpoint,
  minifySource
} = require('./nano')

// 监听源码文件变化
function watchSourceChange(cb) {
  gulp.watch(
    [
      path.join(rootDir, './**/*.scss')
    ],

    gulp.series(
      cleanDest,

      compileSource,

      compileAttemp,

      injectAttemp,

      cleanAttemp,

      minifyBreakpoint,

      minifySource
    )
  )
}

module.exports = {
  watchSourceChange
}