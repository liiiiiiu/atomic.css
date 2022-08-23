const gulp = require('gulp')

const {
  cleanDest,
  cleanAttemp,
  cleanConfig
} = require('./core/task/clean')

const {
  concatAttemp,
  concatNormalize2Breakpoint,
  concatNormalize2Source
} = require('./core/task/concat')

const {
  generateBreakpoint,
  generateWxss
} = require('./core/task/generate')

const {
  compileConfig,
  compileSource,
  compileAttemp
} = require('./core/task/compile')

const {
  minifySource,
  minifyBreakpoint,
  minifyWxss
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

    // 将自定义样式与打包后的 css 源码合并
    concatAttemp,

    // 合并完成后清空自定义样式文件
    cleanAttemp,

    // 此时 css 源码内已包含内置样式以及自定义样式
    // 根据这些样式生成断点样式
    generateBreakpoint,

    // 由于 normalize 不需要响应式断点，所以在 `generateBreakpoint` 之后执行
    // 将 normalize.css 与断点样式合并
    concatNormalize2Breakpoint,

    // 压缩并生成断点 min 文件
    minifyBreakpoint,

    // 生成适用于微信小程序的样式文件
    generateWxss,

    // 小程序拥有独立标签，无需合并 normalize.css
    // 压缩并生成微信小程序 min 文件
    minifyWxss,

    // 将 normalize.css 与源码样式合并
    concatNormalize2Source,

    // 最后再压缩 css 源码并生成 min 文件
    minifySource,

    // 处理完上面的步骤后，监听 sass 文件的变化，并根据 sass 变化同步打包生成新的样式文件
    watchSourceChange
  )
)