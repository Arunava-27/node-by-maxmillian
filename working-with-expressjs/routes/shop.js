const express = require('express')

const router = express.Router();

router.get('/', (req, res) => { 
    console.log("root path / home route"); 
    
    res.send("<h1>Hello from Express</h1>")   // to send response to the client
})

module.exports = router;