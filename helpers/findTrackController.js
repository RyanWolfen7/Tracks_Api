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
    fs.writeFileSync('../tracks/tracks.json', JSON.stringify(tracks))
}

module.exports = { FindInArray, WriteToTracksJSON }
