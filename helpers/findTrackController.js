const fs = require('fs')

const FindInArray = (array, search, type) => {
    return array.reduce( (arr, item) => {
        if(item[type] === search) {
            arr.push(item)
        }
        return arr
    }, [])
}

const WriteToTracksJSON = (tracks) => {
    const updatedTracks = { tracks: tracks}
    fs.writeFileSync('./tracks/tracks.json', JSON.stringify(updatedTracks), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    })
}

module.exports = { FindInArray, WriteToTracksJSON }
