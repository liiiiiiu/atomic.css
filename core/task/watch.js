const gulp = require('gulp')
const path = require('path')

const {
  rootDir
} = require('../base')

const {
  cleanDest,
  cleanAttemp
} = require('./clean')

const {
  concatAttemp,
  concatNormalize2Breakpoint,
  concatNormalize2Source
} = require('./concat')

const {
  generateBreakpoint,
  generateWxss
} = require('./generate')

const {
  compileSource,
  compileAttemp
} = require('./compile')

const {
  minifyBreakpoint,
  minifySource,
  minifyWxss
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

      concatAttemp,

      cleanAttemp,

      generateBreakpoint,

      concatNormalize2Breakpoint,

      minifyBreakpoint,

      generateWxss,

      minifyWxss,

      concatNormalize2Source,

      minifySource
    )
  )
}

module.exports = {
  watchSourceChange
}