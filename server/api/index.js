const router = require('express').Router()
const {db, Album, Artist, Song} = require ('../db/index')

router.get('/albums', async (req, res, next) => {
    const response = await Album.findAll({
        include: [Artist]
    })
    res.json(response)
})

router.get('/albums/:albumId', async (req, res, next) => {
    const response = await Album.findAll({
        where: {
            id: req.params.albumId
        },
        include: [{model: Artist}, {model: Song}]
    })
    res.json(response[0])
})





module.exports = router
