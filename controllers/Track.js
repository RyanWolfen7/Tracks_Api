const { FindInArray, WriteToTracksJSON } =  require('../helpers/findTrackController')
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

    async putNewTracks(req, res) {
        let tracks = file.tracks 
        const trackAddition = req.body && req.body.tracks 

        trackAddition.forEach( (track, i) => {
            tracks.push({
                artist: track.artist,
                title: track.title,
                id: tracks.length + i
            })
        })
        try {
            await WriteToTracksJSON(tracks)
            res.status(200).json({ data: 'Successfully Uploaded'})
        } catch(err) {
            res.status(500).json({ error: err})
        }
    }

    async deleteTrack(req, res) {
        let tracks = file.tracks 
        const trackDeletion = req.body && req.body.track
        let responseData = {}

        if(!trackDeletion || !trackDeletion.title || !trackDeletion.artist) {
            return res.status(500).json({ error: 'You do not have the correct body'})
            
        } else {
            tracks = tracks.reduce((arr, track, id) => {
                if(track.artist === trackDeletion.artist && track.title === trackDeletion.title) {
                    responseData = track
                    id-- 
                } else {
                    arr.push({
                        artist: track.artist,
                        title: track.title,
                        id: id
                    })
                }
            },[])
        }

        try {
            await WriteToTracksJSON(tracks)
            res.status(200).json({ data: `Successfully Deleted ${responseData.artist} ${responseData.tile} ${responseData.id}`})
        } catch(err) {
            res.status(500).json({ error: err})
        }
    }

}


module.exports = TrackController
