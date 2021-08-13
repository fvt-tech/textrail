const mongoose = require('mongoose')

const groupSchema = mongoose.Schema({
    name: {
        type: String,
        required: []
    },
    contacts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

module.exports = groupSchema