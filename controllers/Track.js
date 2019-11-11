const FindInArray =  require('../helpers/findTrackController')
const file = require('../tracks/tracks')

class TrackController {

    getTrack(req, res) {
        const { artist, title, index } = req.query
        const tracks = file.tracks 

        if (artist) { 
            return res.json({ data: FindInArray(tracks, artist, 'artist') }) 
        }
        if (title) { 
            return res.json({ data: FindInArray(tracks, title, 'title') }) 
        }
        if (index) { 
            return res.json({ data: FindInArray(tracks, index, 'id') })
        }
        return res.json({ data: 'You have not provided a search query'})
    }

    getAllTracks(req, res) {
        const tracks = file.tracks 
        return res.json({ data: tracks})
    }

    
}


module.exports = TrackController
