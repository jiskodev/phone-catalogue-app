const mongoose = require('mongoose');

const PhoneSchema = mongoose.Schema({
    name: String,
    manufacturer: String,
    description: String,
    color: String,
    price: String,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: String
})

module.exports = mongoose.model('Phones', PhoneSchema)