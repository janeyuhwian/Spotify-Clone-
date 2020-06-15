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
        include: [Artist, {model: Song}]
    })
    res.json(response)
})


module.exports = router
