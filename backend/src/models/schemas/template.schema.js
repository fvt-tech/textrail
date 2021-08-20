const mongoose = require('mongoose')

const templateSchema = mongoose.Schema({
    name: {
        type: String
    },
    message: {
        type: String,
        required: [true, 'template required message']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'user required']
    }
}, {timestamps: true})

module.exports = templateSchema