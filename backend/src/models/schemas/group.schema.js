const mongoose = require('mongoose')

const groupSchema = mongoose.Schema({
    name: {
        type: String,
        required: []
    },
    contacts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact'
    }]
})

module.exports = groupSchema