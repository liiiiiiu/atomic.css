const sourceFileName = 'atom'
const attempFileName = 'atom.attemp'

const rootDir = ''
const sourceDir = 'src'
const libDir = sourceDir + '/lib'
const devDir = 'dev'
const destDir = 'dist'
const templateDir = 'template'

function addFileExt(fileName, ext = 'scss') {
  return fileName ? fileName + '.' + ext : fileName
}

module.exports = {
  sourceFileName,
  attempFileName,
  rootDir,
  sourceDir,
  libDir,
  devDir,
  destDir,
  templateDir,
  addFileExt
}