const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const cors =  require('cors');


// Import Routes

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


const phonesRoute = require('./src/routes/phones')

app.use('/phones', phonesRoute)


// ROUTE
app.get('/', (req, res) =>{
    res.send('we are on home')
});

// Connect To DB

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB!')
})



// How do we start listening
const PORT = process.env.PORT|| 4000;
app.listen(PORT);
