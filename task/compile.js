const gulp = require('gulp')
const postcss = require('gulp-postcss')
const pump = require('pump')
const sass = require('gulp-sass')(require('sass'))
const sorting = require('postcss-sorting')
const size = require('gulp-size')
const rename = require('gulp-rename')
const changed = require('gulp-changed')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const cssnano = require('cssnano')
const template = require('gulp-template')
const removeEmptyLines = require('gulp-remove-empty-lines')
const path = require('path')

const {
  atomDir,
  sourceDir,
  devDir,
  destDir,
  templateDir,
  atomFileName,
  attempFileName,
  addFileExt
} = require('./base')

const {
  defaults
} = require(`../atom.config`)

// 将源码 sass 编译为 css 并输出
function compileSource(cb) {
  pump([
    // 输入文件
    gulp.src(path.join(atomDir, addFileExt(atomFileName))),

    // 将 sass 编译为 css
    sass(),

    // 文件重命名
    rename(function (path) { path.basename = atomFileName }),

    // 只处理变化的文件
    changed(destDir),

    postcss([
      // 样式属性自动排序
      sorting()
    ]),

    // 输出文件大小
    size(),

    // 输出目录
    gulp.dest(destDir),
  ], cb)
}

// 将 attemp sass 编译为 css 并输出
function compileAttemp(cb) {
  pump([
    // 输入文件
    gulp.src(path.join(sourceDir, addFileExt(attempFileName))),

    // 将 sass 编译为 css
    sass(),

    // 文件重命名
    rename(function (path) { path.basename = attempFileName }),

    postcss([
      // 样式属性自动排序
      sorting()
    ]),

    // 输出目录
    gulp.dest(devDir),
  ], cb)
}

// 编译配置文件
function compileConfig(cb) {
  pump([
    // 输入文件
    gulp.src(path.join(templateDir, addFileExt('atom.config', 'txt'))),

    // 使用 template 模版编译配置文件
    template({ defaults: JSON.parse(JSON.stringify(defaults)) }),

    // 文件重命名
    rename(addFileExt('_config')),

    // 移除空行
    removeEmptyLines(),

    // 输出目录
    gulp.dest(devDir),
  ], cb)
}

// 压缩编译后 css 并输出到 dist 目录
function minifySource(cb) {
  pump([
    // 输入文件
    gulp.src(path.join(destDir, addFileExt(atomFileName, 'css'))),

    // 文件重命名
    rename({ suffix: '.min' }),

    sourcemaps.init(),

    // 添加厂商前缀
    autoprefixer({
      overrideBrowserslist: ['> 0.15% in CN'],
      cascade: true
    }),

    postcss([
      // 样式属性自动排序
      sorting(),
      // 样式压缩
      cssnano(),
    ]),

    // 输出文件大小
    size(),

    // 生成 sourcemap
    sourcemaps.write('.'),

    // 输出目录
    gulp.dest(destDir)
  ], cb)

  console.log(new Date().toLocaleTimeString())
}

module.exports = {
  compileConfig,
  compileSource,
  compileAttemp,
  minifySource
}