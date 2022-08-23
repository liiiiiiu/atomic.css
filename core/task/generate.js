const gulp = require('gulp')
const pump = require('pump')
const removeEmptyLines = require('gulp-remove-empty-lines')
const path = require('path')
const fs = require('fs')

const {
  decorator,
  theme
} = require('../../atom.config')

const {
  sourceFileName,
  breakpointFileName,
  destDir,
  fcss,
  fwxss
} = require('../base')

// 生成断点样式文件
function generateBreakpoint(cb) {
  const sourceFileContent = fs.readFileSync(
    path.join(destDir, fcss(sourceFileName)
  ), { encoding: 'utf-8' })

  let mediaQueryContent = ''

  if (sourceFileContent) {
    // 排除 :root 和 @media 样式
    const rclass = /[\n\s]+\.[\w\d\-\_\\.]+(,|\s[\>\*\+]*)\{([^}])*}/g
    mediaQueryContent = sourceFileContent.match(rclass)
    if (mediaQueryContent && mediaQueryContent.length) {
      mediaQueryContent = mediaQueryContent.join('')
    }
    // console.log('mediaQueryContent', mediaQueryContent)
  }

  if (
    !sourceFileContent ||
    !mediaQueryContent ||
    !(theme && theme.screens)
  ) {
    return cb()
  }

  const rclassname = /([\n\s]+\.[\w\d\-\_\\.]+(,|\s*))/g
  const rprop = /\{([^}])*}/g

  const classNames = mediaQueryContent.match(rclassname)

  // const test = /([\n\s]+\.[\w\d\-\_\\.]+(,|\s*)){1,}/g
  // // console.log('test', '.-inset-x-2\.5 {'.match(test))
  // console.log('test', '\n.-inset-x-3 { right: -0.75rem; }'.match(test))
  // // .-inset-x-2\.5

  if (!classNames || !classNames.length) return cb()

  const props = mediaQueryContent.match(rprop)
  const screens = theme.screens

  // console.log('classNames', classNames.length, props.length)

  let finalContent = sourceFileContent
  let mediaContent = ''

  Object.keys(screens).forEach(key => {
    let mediaHeader = `\n@media (min-width: ${screens[key]}) {`
    let mediaFooter = '}'
    mediaContent += mediaHeader + '\n'
    let i = 0
    let j = 0

    if (key[0] === +key[0] + '') {
      key = '\\' + key
    }

    while (i < classNames.length) {
      let className = classNames[i].replaceAll(/\n\s\t\r/g, '').trim()
      let sibling = false

      // .a, .b {} 这种情况下两种类名使用同一种属性
      if (className.indexOf(',') > -1) {
        sibling = true
        className = className.slice(0, -1)
      }

      mediaContent += (className.slice(0, 1) + `${key}\\:` + className.slice(1))
      mediaContent += '\t'
      mediaContent += (props[j] ? props[j].match(rprop) : props[j])
      mediaContent += '\n'

      if (i >= classNames.length - 1) {
        mediaContent += mediaFooter
      }

      i++
      if (!sibling) j++
    }
  })

  finalContent += mediaContent

  let filePath = path.join(destDir, fcss(breakpointFileName))
  fs.writeFileSync(filePath, finalContent, {
    flag: 'w'
  })

  pump([
    // 输入文件
    gulp.src(path.join(destDir, fcss(breakpointFileName))),

    // 移除空行
    removeEmptyLines(),

    // 输出目录
    gulp.dest(destDir),
  ], cb)
}

// 生成微信小程序样式文件
function generateWxss(cb) {
  const useRpx = (decorator && decorator.use && decorator.use.rpx) || false
  const ratio = (decorator && decorator.use && +decorator.use.rem2rpx) || 37.5
  const dotEscape = (decorator && decorator.class && decorator.class.customEscape && decorator.class.customEscape.dot) || 'd'
  const slashEscape = (decorator && decorator.class && decorator.class.customEscape && decorator.class.customEscape.slash) || 's'

  const sourceFileContent = fs.readFileSync(
    path.join(destDir, fcss(sourceFileName)
  ), { encoding: 'utf-8' })

  if (!sourceFileContent) {
    return cb()
  }

  let wxssContent = ''

  wxssContent = sourceFileContent.split('\n.')

  for (let i = 0; i < wxssContent.length; i++) {
    if (wxssContent[i] && useRpx) {
      wxssContent[i] = wxssContent[i].replace(/(?<=\:\s*)([\d\.\-])+(?=rem{1})/g, num => num && +num * ratio)
      wxssContent[i] = wxssContent[i].replaceAll('rem', 'rpx')

      wxssContent[i] = wxssContent[i].replaceAll('\\.', dotEscape)
      wxssContent[i] = wxssContent[i].replaceAll('\\/', slashEscape)
    }
  }

  wxssContent = wxssContent.join('\n.')

  // console.log('generateWxss', wxssContent)

  let filePath = path.join(destDir, fwxss(sourceFileName))
  fs.writeFileSync(filePath, wxssContent, {
    flag: 'w'
  })

  pump([
    // 输入文件
    gulp.src(path.join(destDir, fwxss(sourceFileName))),

    // 移除空行
    removeEmptyLines(),

    // 输出目录
    gulp.dest(destDir),
  ], cb)
}

module.exports = {
  generateBreakpoint,
  generateWxss
}