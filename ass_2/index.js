const express = require('express');

const app = express();

app.use('/users', (req, res) => {
    console.log("users path");
    
    res.send("<h1>Users Page</h1>")
})

app.use('/', (req, res) => {
    console.log("root path");
    
    res.send("<h1>Hello Users!</h1>")
})

app.listen(3000)