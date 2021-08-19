const Template = require('./../models/template.model')

const addTemplate = async (req, res) => {
    const { message, user } = req.body
    try {
        const temp = new Template({
            user,
            message
        })

        await temp.save()
        res.status(201).json({
            status: 'success',
            data: temp
        })
    } catch(e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const getTemplate = async (req, res) => {
    const { id } = req.body
    try {
        const temp = await Template.findById(id)
        res.status(201).json({
            status: 'success',
            data: temp
        })
    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const getTemplates = async (req, res) => {
    const { user } = req.body
    try {
        const temps = await Template.find({user})
        res.status(201).json({
            status: 'success',
            data: temps
        })
    } catch(e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const editTemplate = async (req, res) => {
    const { id, message } = req.body 
    try {
        const temp = await Template.updateOne({_id: id}, {message})
        res.status(201).json({
            status: 'success',
            message: 'edit successful'
        })
    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const delTemplate = async (req, res) => {
    const { id } = req.body
    try {
        const temp = await Template.deleteOne({_id: id})
        res.status(201).json({
            status: 'success',
            message: 'Deleted Successfully'
        })
    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

module.exports = {
    addTemplate,
    getTemplate,
    getTemplates,
    editTemplate,
    delTemplate
}