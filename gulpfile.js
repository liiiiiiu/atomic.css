const gulp = require('gulp')

const {
  cleanDest,
  cleanAttemp,
  cleanConfig
} = require('./core/task/clean')

const {
  injectAttemp,
  injectBreakpoint,
  injectNormalize2Breakpoint,
  injectNormalize2Source
} = require('./core/task/inject')

const {
  compileConfig,
  compileSource,
  compileAttemp
} = require('./core/task/compile')

const {
  minifySource,
  minifyBreakpoint,
} = require('./core/task/nano')

const {
  watchSourceChange
} = require('./core/task/watch')

// 执行 gulp 任务
// 修改 atom.config.js 配置文件后需重新执行 gulp 任务
gulp.task('default',
  gulp.series(
    // 首先清空 dest 目录
    cleanDest,

    // 再清空相关配置
    cleanConfig,

    // 然后根据配置文件处理源码内的 sass 文件
    compileConfig,

    // 再将按配置实现的 sass 文件编译打包为 css 源码
    compileSource,

    // 然后处理自定义样式文件
    // 先将自定义样式文件的 sass 编译打包为 css 文件
    compileAttemp,

    // 再将自定义样式文件内的所有样式注入打包后 css 源码
    injectAttemp,

    // 注入完成后清空自定义样式文件
    cleanAttemp,

    // 此时 css 源码内已包含内置样式以及自定义样式
    // 根据这些样式生成断点样式文件
    injectBreakpoint,

    // 由于 normalize 不需要响应式断点，所以在 `injectBreakpoint` 之后执行
    injectNormalize2Breakpoint,

    // 生成压缩后的断点样式文件
    minifyBreakpoint,

    // 将 normalize 注入 css 源码
    injectNormalize2Source,

    // 最后再生成打包后的 css 源码压缩文件
    minifySource,

    // 处理完上面的步骤后，监听 sass 文件的变化，并根据 sass 变化同步打包生成新的样式文件
    watchSourceChange
  )
)

// TODO: 微信小程序的样式文件不支持使用 \ 转义，需要额外适配
gulp.task('wx')