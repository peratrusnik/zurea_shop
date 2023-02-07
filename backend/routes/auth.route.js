const express = require('express')
const authRoute = express.Router()

authRoute.post('/login', (req, res) => {
    console.log(req.body);
    if (!req.body.email || !req.body.password) {
      res.status(409).send(`Required filed: ${!req.body.email ? 'email' : 'password'}`)  
    }
    res.send('OK')
})
authRoute.post('/register', (req, res) => {
    console.log('register api call', req.body);
    res.send('register test')
})

module.exports = authRoute;