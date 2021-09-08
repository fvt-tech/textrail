const Campaign = require('./../models/campaign.model')
const Message = require('./../models/message.model')

const addCampaign = async (req, res) => {
    const { name, startDate, closeDate, user, frequency, message } = req.body
    try {
        const msg = new Message(message)
        await msg.save()
        const campaign = new Campaign({
            name,
            startDate,
            closeDate,
            user,
            frequency,
            message: msg._id
        })
        await campaign.save()

        res.status(201).json({
            status: 'success',
            data: campaign
        })
    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const getCampaigns = async (req, res) => {
    const { user } = req.body
    try {
        const campaigns = await Campaign.find({ user })

        res.status(201).json({
            status: 'success',
            data: campaigns
        })
    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const getCampaign = async (req, res) => {
    const { id } = req.body
    try {
        const item = await Campaign.findById(id)
        res.status(201).json({
            status: 'success',
            data: item
        })
    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const editCampaign = async (req, res) => {
    const { id, update } = req.body
    try {
        await Campaign.updateOne({ _id: id }, { $set: update })
        res.status(201).json({
            status: 'success',
            message: 'Edit Successful'
        })
    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const delCampaign = async (req, res) => {
    const { id } = req.body
    try {
        await Campaign.deleteOne({_id: id})
        res.status(201).json({
            status: 'Success',
            message: 'Deleted Successfully'
        })
    } catch(e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}


module.exports = {
    getCampaign,
    addCampaign,
    getCampaigns,
    editCampaign,
    delCampaign
}