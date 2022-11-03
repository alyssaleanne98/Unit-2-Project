//Dependencies
const express = require('express');
const app = express();
const port = 3002

//Middleware

//Database

// I N D U C E 


// Index
app.get('/', (req, res) => {
    res.send('Hello World')
})
 
// Show 

// Listener

app.listen(port, () => {
    console.log(`listening on port ${port}`) 
})