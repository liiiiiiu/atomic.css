const gulp = require('gulp')
const pump = require('pump')
const postcss = require('gulp-postcss')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const cssnano = require('cssnano')
const sorting = require('postcss-sorting')
const size = require('gulp-size')
const rename = require('gulp-rename')
const path = require('path')
const fs = require('fs')

const {
  destDir,
  sourceFileName,
  breakpointFileName,
  fcss
} = require('./base')

// 压缩编译后的源码样式并输出到 dist 目录
function minifySource(cb) {
  pump([
    // 输入文件
    gulp.src(path.join(destDir, fcss(sourceFileName))),

    // 文件重命名
    rename({ suffix: '.min' }),

    // sourcemaps.init(),

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
    // sourcemaps.write('.'),

    // 输出目录
    gulp.dest(destDir)
  ], cb)

  console.log('minifySource', new Date().toLocaleTimeString())
}

// 压缩生成的断点样式并输出到 dist 目录
function minifyBreakpoint(cb) {
  const breakpointFilePath = path.join(destDir, fcss(breakpointFileName))

  if (!fs.existsSync(breakpointFilePath)) {
    cb()
  } else {
    pump([
      // 输入文件
      gulp.src(breakpointFilePath, {
        allowEmpty: true
      }),

      // 文件重命名
      rename({ suffix: '.min' }),

      // sourcemaps.init(),

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
      // sourcemaps.write('.'),

      // 输出目录
      gulp.dest(destDir)
    ], cb)
  }

  console.log('minifyBreakpoint', new Date().toLocaleTimeString())
}

module.exports = {
  minifySource,
  minifyBreakpoint
}