// Dependencies 


const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const drinksController = require("./controllers/drinks")

require('dotenv').config()
// Pulls environment vars into server.js from .env
const PORT = process.env.PORT

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// Database connection logs 
const db = mongoose.connection
db.on("error", (err) => console.log(err.message))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

//Middleware

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
// captures (post) requests for put and delete/converts them from post
app.use("/coffee", drinksController)
// coffee controller for book routes
app.use(express.static('public'))


// Listener
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})