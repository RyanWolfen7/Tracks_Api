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

    async postNewTracks(req, res) {
        let tracks = file.tracks 
        const trackAddition = req.body && req.body.tracks 

        if(trackAddition) {
            trackAddition.forEach( (track, i) => {
                tracks.push({
                    artist: track.artist,
                    title: track.title,
                    id: tracks.length + (i + 1 )
                })
            })
            try {
                await WriteToTracksJSON(tracks)
                res.status(200).json({ data: 'Successfully Uploaded'})
            } catch(err) {
                res.status(500).json({ error: err})
            }
        } else {
            return res.status(500).json({ error: 'You do not have the correct body'})
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
                return arr
            },[])
        }

        try {
            await WriteToTracksJSON(tracks)
            res.status(200).json({ data: `Successfully Deleted ${responseData.artist} ${responseData.tile} ${responseData.id}`})
        } catch(err) {
            res.status(500).json({ error: err})
        }
    }

    async updateTrack(req, res) {
        let tracks = file.tracks 
        const { title } = req.query
        const trackUpdate = req.body && req.body.track

        if(title && trackUpdate) {
            tracks = tracks.reduce((arr, track, id) => {
                if(track.title === title) {
                    const updatedTrack = {
                        title: trackUpdate.title,
                        name: trackUpdate.artist,
                        id: id
                    }
                    arr.push(updatedTrack)
                } else {
                    arr.push(track)
                }
                return arr
            },[])

            try {
                await WriteToTracksJSON(tracks)
                res.status(200).json({ data: `Successfully Updated ${trackUpdate.artist} ${trackUpdate.tile} ${trackUpdate.id}`})
            } catch(err) {
                res.status(500).json({ error: err})
            }
        } else {
            return res.status(500).json({ error: 'You do not have the correct body and/or query'})
        }
    }

}


module.exports = TrackController
