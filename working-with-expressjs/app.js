const http = require('http')

const express = require('express')

const app = express()

app.use('/add-product', (req, res) => {
    console.log("add product");
    
    res.send("<h1>Add Your Product</h1>")
})

app.use('/', (req, res) => { // Another Middleware
    console.log("root path / home route"); 
    
    res.send("<h1>Hello from Express</h1>")   // to send response to the client
})


app.listen(5000)