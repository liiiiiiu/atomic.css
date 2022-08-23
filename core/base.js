const sourceFileName = 'atom'
const attempFileName = 'atom.attemp'
const breakpointFileName = 'atom.breakpoint'

const rootDir = ''
const sourceDir = 'src'
const libDir = sourceDir + '/lib'
const devDir = 'dev'
const destDir = 'dist'

const concatFileExt = (fileName, ext = 'scss') => fileName ? fileName + '.' + ext : fileName
const fscss = fileName => concatFileExt(fileName, 'scss')
const fcss = fileName => concatFileExt(fileName, 'css')
const fwxss = fileName => concatFileExt(fileName, 'wxss')

module.exports = {
  sourceFileName,
  attempFileName,
  breakpointFileName,
  rootDir,
  sourceDir,
  libDir,
  devDir,
  destDir,
  fscss,
  fcss,
  fwxss
}