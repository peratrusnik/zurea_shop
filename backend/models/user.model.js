const Mongoose = require('mongoose')


const userSchema = new Mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
})

const UserModel = Mongoose.model('users', userSchema) // users name of document in mongoDB

module.exports = UserModel; 