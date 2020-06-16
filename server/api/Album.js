const router = require('express').Router()
const { Album, Artist, Song } = require('../db')

router.get('/', async (req, res, next) => {
    let result = await Album.findAll({ include: [Artist]})

    res.json(result)
})

router.get('/:id', async (req, res, next) => {
    const urlId = req.params.id
    let result = await Album.findAll({
        where: {
            id: urlId
        },
        include: [Artist, {model: Song}]
    })

    res.json(result[0])
})

module.exports = router