const router = require('express').Router()
const Favorites = require('../models/favorites')

router.get('/', async (req, res) => {
    try {
        const favorite = await Favorites.find()

        res.status(200).json("favorites: ", favorites)
    } catch (error) {
        res.status(500).json({error:error})
    }

})

router.post('/', async (req, res) => {

    const {name, url} = req.body

    const favorite = {
        name,
        url
    }

    try {
        await Favorites.create(favorite)
        console.log(favorite)

        res.status(201).json({message: 'Usuario criado com sucesso!'})
    } catch (error) {
        res.status(500).json({error:error})
    }
})

module.exports = router