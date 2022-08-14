const gulp = require('gulp')
const pump = require('pump')
const concat = require('gulp-concat')
const path = require('path')
const fs = require('fs')

const { defaults } = require('../atom.config')

const {
  attempFileName,
  sourceFileName,
  addFileExt,
  destDir,
  devDir
} = require('./base')

// 将自定义样式注入源码
function injectAttemp(cb) {
  const attempFilePath = path.join(devDir, addFileExt(attempFileName, 'css'))
  const attempToFilePath = path.join(destDir, addFileExt(sourceFileName, 'css'))

  if (fs.existsSync(attempFilePath) && fs.existsSync(attempToFilePath)) {
    pump([
      // 输入文件
      gulp.src([attempToFilePath, attempFilePath]),

      // 拼接文件
      concat(addFileExt(sourceFileName, 'css'), {
        newLine: '\n\n'
      }),

      // 输出目录
      gulp.dest(destDir)
    ], cb)
  } else {
    throw Error('injectAttemp error, file not exists!')
  }
}

function genMediaQuery(content) {
  if (defaults && defaults.theme && defaults.theme.screens) {
    if (fs.existsSync(devDir)) {
      let filePath = path.join(devDir, 'breakpoint.css')
      if (fs.existsSync(filePath)) {
        fs.unlink(filePath, err => {
          if (err) console.log('unlink breakpoint.css error', err)
        })
      }
      fs.writeFileSync(filePath, content)

    } else {
      return false
    }

    return true
  }

  return false
}

// 将响应式断点注入源码
function injectBreakpoint(cb) {
  const sourceFilePath = path.join(destDir, addFileExt(sourceFileName, 'css'))
  const content = fs.readFileSync(sourceFilePath, { encoding: 'utf-8' })

  if (!genMediaQuery(content)) {
    cb()
  } else {
    console.log('content', content)
    pump([
      gulp.src(sourceFilePath, {
        allowEmpty: true
      }),

      gulp.dest(destDir),
    ], cb)
  }

}

module.exports = {
  injectAttemp,
  injectBreakpoint
}