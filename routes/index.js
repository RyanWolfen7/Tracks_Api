const TrackControllerClass = require('../controllers/Track')
const TrackController = new TrackControllerClass()


module.exports = ( app ) => {
    app.get('/find/track', ( req, res ) => {
        TrackController.getTrack( req, res)
    })

    app.get('/find/tracks', ( req, res ) => {
        TrackController.getAllTracks( req, res)
    }) 

    app.put('/add/tracks', ( req, res) => {
        TrackController.putNewTracks( req, res)
    })

    app.delete('/delete/track', (req, res) => {
        TrackController.deleteTrack(req, res)
    })
}
