const gulp = require('gulp')
const pump = require('pump')
const concat = require('gulp-concat')
const path = require('path')
const fs = require('fs')

const {
  decorator
} = require('../../atom.config')

const {
  attempFileName,
  sourceFileName,
  breakpointFileName,
  destDir,
  devDir,
  fcss
} = require('../base')

// 将自定义样式与源码合并
function concatAttemp(cb) {
  const attempFilePath = path.join(devDir, fcss(attempFileName))
  const sourceFilePath = path.join(destDir, fcss(sourceFileName))

  if (fs.existsSync(attempFilePath) && fs.existsSync(sourceFilePath)) {
    pump([
      // 输入文件
      gulp.src([sourceFilePath, attempFilePath]),

      // 拼接文件
      concat(fcss(sourceFileName), {
        newLine: '\n\n'
      }),

      // 输出目录
      gulp.dest(destDir)
    ], cb)
  } else {
    throw Error('concatAttemp error, file not exists!')
  }
}

// 将 normalize.css 与断点样式合并
function concatNormalize2Breakpoint(cb) {
  if (decorator && decorator.use && decorator.use.normalize) {
    const normalizeFilePath = path.join('node_modules/normalize.css', fcss('normalize'))
    const breakpointFilePath = path.join(destDir, fcss(breakpointFileName))

    if (fs.existsSync(normalizeFilePath) && fs.existsSync(breakpointFilePath)) {
      pump([
        // 输入文件
        gulp.src([breakpointFilePath, normalizeFilePath]),

        // 拼接文件
        concat(fcss(breakpointFileName), {
          newLine: '\n\n'
        }),

        // 输出目录
        gulp.dest(destDir)
      ], cb)
    } else {
      cb()
    }

  } else {
    cb()
  }
}

// 将 normalize.css 与源码样式合并
function concatNormalize2Source(cb) {
  if (decorator && decorator.use && decorator.use.normalize) {
    const normalizeFilePath = path.join('node_modules/normalize.css', fcss('normalize'))
    const sourceFilePath = path.join(destDir, fcss(sourceFileName))

    if (fs.existsSync(normalizeFilePath) && fs.existsSync(sourceFilePath)) {
      pump([
        // 输入文件
        gulp.src([sourceFilePath, normalizeFilePath]),

        // 拼接文件
        concat(fcss(sourceFileName), {
          newLine: '\n\n'
        }),

        // 输出目录
        gulp.dest(destDir)
      ], cb)
    } else {
      cb()
    }

  } else {
    cb()
  }
}

module.exports = {
  concatAttemp,
  concatNormalize2Breakpoint,
  concatNormalize2Source
}