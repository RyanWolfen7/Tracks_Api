const fs = require('fs')

const findInArray = (array, search, type) => {
  return array.reduce((arr, item) => {
    if (item[type] === search) {
      return [...arr, item]
    }
    return arr
  }, [])
}

const writeToTracksJSON = (tracks) => {
  const updatedTracks = { tracks: tracks }
  fs.writeFileSync('./tracks/tracks.json', JSON.stringify(updatedTracks), (err) => {
    if (err) throw err
    console.log('Data written to file')
  })
}

module.exports = { findInArray, writeToTracksJSON }
