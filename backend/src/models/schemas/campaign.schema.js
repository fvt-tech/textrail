const mongoose = require('mongoose')

const campaignSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name required']
    },

    startDate: {
        type: Date,
        required: [true, 'Start Date required']
    },

    closeDate: {
        type: Date,
        required: [true, 'Close Date required']
    },

    frequency: {
        type: String,
        required: [true, 'frequency required']
    },

    next : String,

    message: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = campaignSchema