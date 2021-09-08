const auditSchema = require('./schemas/audit.schema')
const { model } = require('mongoose')

const Audit = model('Audit', auditSchema)

module.exports = Audit