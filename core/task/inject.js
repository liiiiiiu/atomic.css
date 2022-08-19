const gulp = require('gulp')
const pump = require('pump')
const concat = require('gulp-concat')
const path = require('path')
const fs = require('fs')

const { theme } = require('../../atom.config')

const {
  attempFileName,
  sourceFileName,
  breakpointFileName,
  destDir,
  devDir,
  fcss
} = require('./base')

// 将自定义样式注入源码
function injectAttemp(cb) {
  const attempFilePath = path.join(devDir, fcss(attempFileName))
  const attempToFilePath = path.join(destDir, fcss(sourceFileName))

  if (fs.existsSync(attempFilePath) && fs.existsSync(attempToFilePath)) {
    pump([
      // 输入文件
      gulp.src([attempToFilePath, attempFilePath]),

      // 拼接文件
      concat(fcss(sourceFileName), {
        newLine: '\n\n'
      }),

      // 输出目录
      gulp.dest(destDir)
    ], cb)
  } else {
    throw Error('injectAttemp error, file not exists!')
  }
}

// 生成响应式断点样式文件并注入 dest 目录
function injectBreakpoint(content, mediaQueryContent) {
  if (
    !content
    || !mediaQueryContent
    || !(theme && theme.screens)
  ) return false

  // 正则会排除 :root @keyframes 等属性
  const rclassname = /([\n\s]+\.[\w\d\-\_\\.]+(,|\s*))/g
  const rprop = /\{([^}])*}/g
  const rclass = /[\n\s]+\.[\w\d\-\_\\.]+(,|\s*){([^}])*}/g

  const classNames = mediaQueryContent.match(rclassname)

  // const test = /([\n\s]+\.[\w\d\-\_\\.]+(,|\s*)){1,}/g
  // // console.log('test', '.-inset-x-2\.5 {'.match(test))
  // console.log('test', '\n.-inset-x-3 { right: -0.75rem; }'.match(test))
  // // .-inset-x-2\.5

  if (!classNames || !classNames.length) return false

  const props = mediaQueryContent.match(rprop)
  const screens = theme.screens

  console.log('classNames', classNames.length, props.length, classNames, props)

  return false

  let finalContent = content
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

  return true
}


module.exports = {
  injectAttemp,
  injectBreakpoint
}