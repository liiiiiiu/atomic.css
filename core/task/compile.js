const gulp = require('gulp')
const postcss = require('gulp-postcss')
const pump = require('pump')
const sass = require('gulp-sass')(require('sass'))
const sorting = require('postcss-sorting')
const size = require('gulp-size')
const rename = require('gulp-rename')
const changed = require('gulp-changed')
const removeEmptyLines = require('gulp-remove-empty-lines')
const path = require('path')
const fs = require('fs')

const {
  rootDir,
  devDir,
  destDir,
  sourceDir,
  sourceFileName,
  attempFileName,
  fscss
} = require('../base')

const {
  decorator,
  theme
} = require(`../../atom.config`)

// 将源码 sass 编译为 css 并输出
function compileSource(cb) {
  pump([
    // 输入文件
    gulp.src(path.join(rootDir, fscss(sourceFileName))),

    // 将 sass 编译为 css
    sass(),

    // 文件重命名
    rename(function (path) { path.basename = sourceFileName }),

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
    gulp.src(path.join(rootDir, fscss(attempFileName))),

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

function parseValue(value) {
  if (['', '-', '_'].includes(value)) {
    return `'${value}'`
  }

  if (Array.isArray(value)) {
    let saasList = '('

    Array.from(value, val => val && (saasList += `'${val}', `))

    saasList += ')'

    return saasList
  }

  return value
}

function isPlainObject(value) {
  return typeof value === 'object' && value != null && Object.prototype.toString.call(value) === '[object Object]'
}

function parseDecoratorConfig(config) {
  let content = ''
  let parentKey = ''

  const parser = (obj) => {
    Object.keys(obj).forEach(key => {
      if (isPlainObject(obj[key])) {
        parentKey = key
        parser(obj[key])
      } else {
        content += (`$${parentKey}-${key}: ${parseValue(obj[key])};\n`)
      }
    })
  }

  parser(config)

  return content
}

// 返回 sass map 数据结构
function parseThemeConfig(config) {
  let content = ''

  Object.keys(config).forEach(outerKey => {
    content += `$map-${outerKey}: (`

    if (typeof config[outerKey] === 'function') {
      config[outerKey] = config[outerKey](config)
    }
    Object.keys(config[outerKey]).forEach(innerKey => {
      content += (`'${innerKey}': ${parseValue(config[outerKey][innerKey])},\n`)
    })

    content += ');\n'
  })

  return content
}

// 编译 config 配置文件为 sass 变量
function compileConfig(cb) {
  if (!decorator || !theme) {
    cb()
  } else {
    let configContent = ''

    let decoratorConfigContent = parseDecoratorConfig(decorator)
    // console.log('decoratorConfigContent', decoratorConfigContent)

    let themeConfigContent = parseThemeConfig(theme)
    // console.log('themeConfigContent', themeConfigContent)

    configContent += (decoratorConfigContent + '\n' + themeConfigContent)

    let filePath = path.join(sourceDir, fscss('_config'))
    fs.writeFileSync(filePath, configContent, {
      flag: 'w'
    })

    pump([
      // 输入文件
      gulp.src(path.join(sourceDir, fscss('_config'))),

      // 移除空行
      removeEmptyLines(),

      // 输出目录
      gulp.dest(sourceDir),
    ], cb)
  }
}

module.exports = {
  compileConfig,
  compileSource,
  compileAttemp
}