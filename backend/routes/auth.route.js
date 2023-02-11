const express = require('express');
const UserModel = require('../models/user.model');
const authRoute = express.Router()

authRoute.get('/users', (req, res) => {
  UserModel.find({}, (error, users) => {
    if (error) {
      res.status(415).send(error)
      return      
    }
    res.send(users)
  })
})

authRoute.post('/login', (req, res) => {
    console.log('body', req.body);
    if (!req.body.email || !req.body.password) {
      res.status(409).send(`Required filed: ${!req.body.email ? 'email' : 'password'}`)  
  }
  UserModel.findOne(req.body)
    .then(data => {
      console.log('data....', data);
      // if user not exists in DB
      if (!data) {
        res.status(215).send('Bad credentials.')
        // return
      }
      // user exists in DB
      res.status(200).send(data)
      return
    })
    .catch(error => {
      console.log(error);
      res.status(415).send(error)
    })
})
authRoute.post('/register', (req, res) => {
    console.log('register api call', req.body);
    res.send('register test')
})

module.exports = authRoute;