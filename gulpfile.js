const gulp = require('gulp')

const {
  cleanDest,
  cleanAttemp,
  cleanConfig
} = require('./task/clean')

const {
  injectAttemp,
  injectBreakpoint
} = require('./task/inject')

const {
  compileConfig,
  compileSource,
  compileAttemp,
  minifySource
} = require('./task/compile')

const {
  watchSourceChange
} = require('./task/watch')

// 执行 gulp 任务
// 修改[atom.config.js]后需重新执行 gulp 任务
gulp.task('default',
  gulp.series(
    cleanDest,

    cleanConfig,

    compileConfig,

    compileSource,

    compileAttemp,

    injectAttemp,

    cleanAttemp,

    injectBreakpoint,

    minifySource,

    watchSourceChange
  )
)