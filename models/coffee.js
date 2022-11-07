const mongoose = require('mongoose')

// // this is our book schema
const coffeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true }, 
    img: { type: String, required: true }, 
    milk: { type: String, required: true },
    flavors: { type: String, required: true },
    espresso: { type: String, required: true },
    toppings: { type: String, required: true },

})

// this is where we define our model using the schema we created 
const Coffee = mongoose.model("Coffee", coffeeSchema)


// this is how we send vars to other files 
module.exports = Coffee 
