const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    senderID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sender'
    },
    message: String,
    contacts: [{
        type: String,
    }]
}, { timestamps: true })

module.exports = messageSchema