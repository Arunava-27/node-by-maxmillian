const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product', (req, res) => {
    console.log("In the middleware");
    res.send(
        `<form action="/product" method="POST">
            <input type="text" name="title">
            <button type="submit">Add Product</button>
        </form>`
    )
})

app.use('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/')    
})

app.use('/', (req, res) => { 
    console.log("root path / home route"); 
    
    res.send("<h1>Hello from Express</h1>")   // to send response to the client
})


app.listen(5000)