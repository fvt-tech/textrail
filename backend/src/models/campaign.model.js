const { model } = require('mongoose')
const campaignSchema = require('./schemas/campaign.schema')

const Campaign = model('Campaign', campaignSchema)

module.exports = Campaign