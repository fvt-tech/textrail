const { model } = require('mongoose')
const groupSchema = require('./schemas/group.schema')

const Group = model('Group', groupSchema)

module.exports = Group