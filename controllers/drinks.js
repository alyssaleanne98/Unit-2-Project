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

//NEW
coffeeRouter.get("/new", (req, res) => {
    res.render("new.ejs")
})

//DELETE


//SHOW ROUTE 
coffeeRouter.get("/:id", (req, res) => {
    Coffee.findById(req.params.id, (err, foundCoffee) => {
        res.render("show.ejs", {coffees: foundCoffee})
    })
})




//EDIT

//UPDATE 



module.exports = coffeeRouter 