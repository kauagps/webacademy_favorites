const mongoose = require('mongoose')

const Favorites = mongoose.model('Favorites', {
    name: String,
    url: String
})

module.exports = Favorites