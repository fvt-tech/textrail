const mongoose = require('mongoose')
const userSchema = require('./schemas/user.schema')

userSchema.statics.checkExistingField = async (field, value) => {
    const checkField = await User.findOne({ [`${field}`]: value})

    return checkField
}

const User = mongoose.model('User', userSchema)
module.exports = User