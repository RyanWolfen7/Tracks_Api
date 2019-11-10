const TrackControllerClass = require('../controllers/Track')
const TrackController = new TrackControllerClass()


module.exports = ( app ) => {
    app.get('/find', ( req, res ) => {
        TrackController.getTrack( req, res)
    })
}
