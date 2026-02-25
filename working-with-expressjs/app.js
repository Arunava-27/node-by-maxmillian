const http = require('http')

const express = require('express')

const app = express()

app.use((req, res, next) => { // Middleware
    console.log("In Middleware"); 
    next();   // to move to the next middleware or route handler
})


app.use((req, res, next) => { // Another Middleware
    console.log("In another Middleware"); 
    
    res.send("<h1>Hello from Express</h1>")   // to send response to the client
})

const server = http.createServer(app)

server.listen(5000)