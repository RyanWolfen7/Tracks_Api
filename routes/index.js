const Track = new require('../controllers/Track')()
const { addTracks, updateTrack, deleteTrack } = require('../validators');

module.exports = (app) => {
  app.get('/find/track', (req, res) => {
    Track.getTrack(req, res)
  })

  app.get('/find/tracks', (req, res) => {
    Track.getAllTracks(req, res)
  })

  app.post('/add/tracks', addTracks, (req, res) => {
    Track.postNewTracks(req, res)
  })

  app.put('/update/track', updateTrack, (req, res) => {
    Track.updateTrack(req, res)
  })

  app.delete('/delete/track', deleteTrack, (req, res) => {
    Track.deleteTrack(req, res)
  })
}
