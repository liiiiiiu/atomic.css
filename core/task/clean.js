const gulp = require('gulp')
const pump = require('pump')
const gulpClean = require('gulp-clean')
const path = require('path')

const {
  destDir,
  devDir,
  sourceDir,
  attempFileName,
  fcss,
  fscss
} = require('../base')

// 删除 dest 目录
function cleanDest(cb) {
  pump([
    gulp.src(destDir, {
      allowEmpty: true
    }),

    gulpClean()
  ], cb)
}

// 删除 attemp 样式文件
function cleanAttemp(cb) {
  pump([
    gulp.src(path.join(devDir, fcss(attempFileName)), {
      allowEmpty: true
    }),

    gulpClean()
  ], cb)
}

// 删除 config 样式文件
function cleanConfig(cb) {
  pump([
    gulp.src(path.join(sourceDir, fscss('_config')), {
      allowEmpty: true
    }),

    gulpClean()
  ], cb)
}

module.exports = {
  cleanDest,
  cleanAttemp,
  cleanConfig
}