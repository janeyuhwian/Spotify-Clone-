const router = require('express').Router()
const album = require('./album')

// connect API routes here 
router.use('/albums', album)

module.exports = router