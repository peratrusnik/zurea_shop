const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth.route')
const MONGO_DB_URL = require('./config/db.Config')
const portNumber = 5050

//connect to mongo DB
mongoose.set('strictQuery', false) // write all // true -> write only from userModel
mongoose.connect(MONGO_DB_URL)
    .then(data => {
        console.log(data);
        console.log('Mongo Db is connected.');
    })
    .catch(error => {
        console.error(error);
        console.error('Error while connecting to mongo DB.');
    })


// communicate with external servers
app.use(cors())


app.use(express.json())
app.use('/api/auth', authRoute)



app.listen(portNumber , (error) => {
    if (error) {
        console.log('--- ERROR ON SERVER START ---');
        console.log(error);
    } else {
        console.log(`Server is running on port: ${portNumber}`);
    }
})