const gulp = require('gulp')
const pump = require('pump')
const concat = require('gulp-concat')
const path = require('path')
const fs = require('fs')

const {
  attempFileName,
  atomFileName,
  addFileExt,
  destDir,
  devDir
} = require('./base')

// 将自定义样式注入源码
function injectAttemp(cb) {
  const attempFilePath = path.join(devDir, addFileExt(attempFileName, 'css'))
  const attempToFilePath = path.join(destDir, addFileExt(atomFileName, 'css'))

  if (fs.existsSync(attempFilePath) && fs.existsSync(attempToFilePath)) {
    pump([
      // 输入文件
      gulp.src([attempToFilePath, attempFilePath]),

      // 拼接文件
      concat(addFileExt(atomFileName, 'css'), {
        newLine: '\n\n'
      }),

      // 输出目录
      gulp.dest(destDir)
    ], cb)
  } else {
    throw Error('InjectAttemp2Dest error, file not exists!')
  }
}

// 将响应式断点注入源码
function injectBreakpoint(cb) {
  const cssFile = path.join(destDir, addFileExt(atomFileName, 'css'))
  const css = fs.readFileSync(cssFile, {
    encoding: 'utf-8'
  })

  // console.log('css', css)
  pump([
    gulp.src(cssFile, {
      allowEmpty: true
    }),

    gulp.dest(destDir),
  ], cb)
}

module.exports = {
  injectAttemp,
  injectBreakpoint
}