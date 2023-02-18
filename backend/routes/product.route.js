const express = require('express')
const productRoute = express.Router()
const ProductModel = require('../models/product.model')

productRoute.get('/get-all', (req, res) => {
    ProductModel
        .find({})
        .then(data => res.send(data))
        .catch(error => res.status(420).send('Error in DB.'))
})

productRoute.post('/search', (req, res) => {
    // console.log(req.body);
    ProductModel
        .find({
            title: req.body.searchParam
        })
        .then(data => {
            // console.log(data);
            if (!data || !data.length) {
                res.status(209).send('no results')                
            }
            res.send(data)
        })
        .catch(error => {
            console.log(error);
            res.status(415).send('error on search')
    })
})

module.exports = productRoute