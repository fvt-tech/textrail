const { model } = require('mongoose')
const contactSchema = require('./schemas/contact.schema')

const Contact = model('Contact', contactSchema)

module.exports = Contact