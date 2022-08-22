const gulp = require('gulp')
const pump = require('pump')
const concat = require('gulp-concat')
const removeEmptyLines = require('gulp-remove-empty-lines')
const path = require('path')
const fs = require('fs')

const {
  theme,
  decorator
} = require('../../atom.config')

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
    throw Error('injectAttemp error, file not exists!')
  }
}

// 生成响应式断点样式文件并注入 dest 目录
function injectBreakpoint(cb) {
  const sourceFilePath = path.join(destDir, fcss(sourceFileName))

  const content = fs.readFileSync(sourceFilePath, { encoding: 'utf-8' })

  let mediaQueryContent = content

  if (content) {
    // 排除 :root 和 @media 样式
    const rclass = /[\n\s]+\.[\w\d\-\_\\.]+(,|\s[\>\*\+]*)\{([^}])*}/g
    mediaQueryContent = content.match(rclass)
    if (mediaQueryContent && mediaQueryContent.length) {
      mediaQueryContent = mediaQueryContent.join('')
    }
    // console.log('mediaQueryContent', mediaQueryContent)
  }

  if (
    !content
    || !mediaQueryContent
    || !(theme && theme.screens)
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

  pump([
    // 输入文件
    gulp.src(path.join(destDir, fcss(breakpointFileName))),

    // 移除空行
    removeEmptyLines(),

    // 输出目录
    gulp.dest(destDir),
  ], cb)
}

// 将 normalize.css 注入断点
function injectNormalize2Breakpoint(cb) {
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

// 将 normalize.css 注入源码
function injectNormalize2Source(cb) {
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
  injectAttemp,
  injectBreakpoint,
  injectNormalize2Breakpoint,
  injectNormalize2Source
}