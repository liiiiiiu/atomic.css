const atomFileName = 'atom'
const attempFileName = 'attemp'

const atomDir = ''
const sourceDir = 'src'
const libDir = sourceDir + '/lib'
const devDir = 'dev'
const destDir = 'dist'
const templateDir = 'template'

function addFileExt(fileName, ext = 'scss') {
  return fileName ? fileName + '.' + ext : fileName
}

module.exports = {
  atomFileName,
  attempFileName,
  atomDir,
  sourceDir,
  libDir,
  devDir,
  destDir,
  templateDir,
  addFileExt
}