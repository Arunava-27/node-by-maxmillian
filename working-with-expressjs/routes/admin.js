const path = require('path')
const express = require('express')

const rootDir = require('../util/path') // Import the root directory of the main module's file

const router = express.Router();

router.get('/add-product', (req, res) => {
    console.log("In add-product");
    // Send the add-product.html file as the response
    res.sendFile(path.join(rootDir, "views", "add-product.html"))
})

router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/')    
})

module.exports = router;