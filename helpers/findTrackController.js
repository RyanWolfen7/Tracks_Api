const FindInArray = (array, search, type) => {
    return array.reduce( (arr, item) => {
        if(item[type] === search) {
            arr.push(item)
        }
        return arr
    }, [])
}

const WriteToTracksJSON = (tracks) => {
    //add fs stream to file
}

module.exports = FindInArray
