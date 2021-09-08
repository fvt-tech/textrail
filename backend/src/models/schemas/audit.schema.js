const mongoose = require('mongoose')

const auditSchema = () => mongoose.Schema({
    logAction: {
        type: String,
        required: [true, 'audit logs need to have an action']
    },

    element: {
        type: String
    },

    elementType: String,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Actions require corresponding User']
    }
}, {timestamps: true})

module.exports = auditSchema