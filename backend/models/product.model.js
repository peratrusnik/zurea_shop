const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    imgUrl: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
})

const ProductModel = mongoose.model('products', productSchema)

module.exports = ProductModel