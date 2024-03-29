const mongoose = require('mongoose')

const senderSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'senderIds must have a name'],
        minlength: 2,
        maxlength: 12
    },
    status: {
        type: String,
        value: 'pending'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

senderSchema.methods.toJSON = function () {
    const sender = this
    const senderObj = sender.toObject()

    if(senderObj.status === 'pending') return
    return senderObj
}

module.exports = senderSchema