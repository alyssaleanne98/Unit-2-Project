// Dependencies
const express = require('express')
const coffeeRouter = express.Router()
const coffeeData = require('../models/seed.js')
const Coffee = require('../models/coffee.js')



// I N D U C E 

// SEED ROUTE 
coffeeRouter.get("/seed", (req, res) => {
    Coffee.deleteMany({}, (error, allCoffee ) => {})
    Coffee.create(coffeeData, (error, data) => {
        res.redirect("/coffee")
    });
})

// INDEX ROUTE
coffeeRouter.get("/", (req, res) => {
    Coffee.find({}, (error, allCoffee) => {
        res.render("index.ejs", { coffees: allCoffee}) 
    })
})



module.exports = coffeeRouter 