const FindInArray = (array, search, type) => {
    return array.reduce( (arr, item) => {
        if(item[type] === search) {
            arr.push(item)
        }
        return arr
    }, [])
}

module.exports = FindInArray
