const { model } = require('mongoose')
const senderSchema = require('./schemas/sender.schema')

const Sender = model('Sender', senderSchema)

module.exports = Sender