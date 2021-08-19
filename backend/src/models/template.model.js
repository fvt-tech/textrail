const templateSchema = require('./schemas/template.schema')
const { model } = require('mongoose')

const Template = model('Template', templateSchema)

module.exports = Template