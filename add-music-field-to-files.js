throw Error('Esta archivo ya no puede volver a correr, pero se queda aquí por si luego se necesita hacer algo similar')

//Este archivo toma cada md de content/poemas y le agrega el campo musica, como array, copiando el contenido del campo audio
const fs = require('fs')
const glob = require('glob')
const R = require('ramda')
const log = require('tap-logger')
const mds = glob.sync('content/**/*.md')

const fileAsArrayByLines = R.pipe(
  path => ({path, file: fs.readFileSync(path, 'utf8')}),
)

// const file1 = fileAsArrayByLines(mds[0])

const audioIndex = R.findIndex(line => R.indexOf('audio', line) === 0)

// audioIndex(file1)/*? */


const addMusicAtIndex = (index, arr) => {
  let audio = arr[index]
  let first =  R.slice(0, index, arr)/*? */
  let last = R.slice(index, Infinity, arr)/*? */
  let music = audio.replace('audio: ', 'musica: \n  - ').replace('.mp3', '-musica.mp3')
  return [].concat(first, music, last)
}

// // addMusicAtIndex(3, ['1', '2', '3', 'audio: 4.mp3', '5', '6', ])/*? */

R.pipe(
  R.map(R.pipe(
    fileAsArrayByLines,
    R.over(R.lensProp('file'), R.pipe(
      R.split('\n'),
      file => ({file, index: audioIndex(file)}),
      ({file, index}) => addMusicAtIndex(index, file),
      R.join('\n'),
    )),
    ({path, file}) => fs.writeFileSync(path, file)
  )),
)(mds)/*? */
