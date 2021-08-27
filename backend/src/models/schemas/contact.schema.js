const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Contact name is required']
    },
    number: {
        type: String,
        required: [true, 'Contact number required']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = contactSchema