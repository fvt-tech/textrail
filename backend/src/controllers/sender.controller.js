const Sender = require('./../models/sender.model')

const addSenderId = async (req, res) => {
    const { senderId, user } = req.body
    try {
        const sender = new Sender({
            name: senderId,
            user,
            status: 'pending'
        })
        await sender.save()
        res.status(201).json({
            status: 'success',
            data: sender
        })
    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const getSenderIds = async (req, res) => {
    const { user } = req.body
    try {
        const senders = await Sender.find({ user })
        res.status(201).json({
            status: 'success',
            data: senders
        })
    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const editSenderId = async (req, res) => {
    const { id, update } = req.body
    try {
        const sender = await Sender.updateOne({_id: id}, {
            $set: update
        })

        res.status(201).json({
            status: 'success',
            message: 'Update Successful'
        })
    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const delSenderId = async (req, res) => {
    const { id } = req.body
    try {
        await Sender.deleteOne({_id: id})
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
    addSenderId,
    editSenderId,
    getSenderIds,
    delSenderId
}