module.exports = (req, res, next) => {
  const body = req.body
  const valid = Array.isArray(body.tracks) && body.tracks.every(track => typeof track === 'object' && ['artist', 'title'].every(key => !!track[key] && typeof track[key] === 'string'))
  
  valid ? next() : res.status(400).send('Your body is formatted incorrectly')
}
