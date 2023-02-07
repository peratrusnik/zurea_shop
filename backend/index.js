const express = require('express')
const app = express()
const cors = require('cors')
const authRoute = require('./routes/auth.route')
const portNumber = 5050

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