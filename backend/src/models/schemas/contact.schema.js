const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Contact name is required']
    },
    number: {
        type: String,
        required: [true, 'Contact number required']
    }
})

module.exports = contactSchema