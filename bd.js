const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//rotas
const favoriteRoutes = require('./Routes/favoritesRoutes')

app.use('/favorites', favoriteRoutes)



const BD_PASSWORD = encodeURIComponent('sTG7RXcLIABXSqei')

mongoose
    .connect(
        `mongodb+srv://kwwangps:${BD_PASSWORD}@bd.ypinoms.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('conectamos ao MongoDB!')
        app.listen(3000)
    })
    .catch(
        (err) => {console.log(err)}
    )