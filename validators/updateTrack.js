module.exports = (req, res, next) => {
  const body = req.body
  const valid = typeof body.track === 'object' && ['artist', 'title'].every(key => !!body.track[key] && typeof body.track[key] === 'string')
  valid ? next() : res.status(400).send('Your body is formatted incorrectly')
}
