const messageSchema = require('./schemas/message.schema')
const { model } = require('mongoose')

const Message = model('Message', messageSchema)

module.exports = Message