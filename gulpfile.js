const gulp = require('gulp')

const {
  cleanDest,
  cleanAttemp,
  cleanConfig
} = require('./task/clean')

const {
  injectAttemp
} = require('./task/inject')

const {
  compileConfig,
  compileSource,
  compileAttemp
} = require('./task/compile')

const {
  minifySource,
  minifyBreakpoint,
} = require('./task/nano')

const {
  watchSourceChange
} = require('./task/watch')

// 执行 gulp 任务
// 修改 atom.config.js 配置文件后需重新执行 gulp 任务
gulp.task('default',
  gulp.series(
    cleanDest,

    cleanConfig,

    compileConfig,

    compileSource,

    compileAttemp,

    injectAttemp,

    cleanAttemp,

    minifyBreakpoint,

    minifySource,

    watchSourceChange
  )
)

// TODO: 微信小程序的样式文件不支持使用 \ 转义，需要额外适配
gulp.task('wx')