const mongoose = require('mongoose')

const campaignSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name required']
    },

    date: {
        type: Date,
        required: [true, 'Date required']
    },

    frequency: {
        type: Number,
        value: 1
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = campaignSchema