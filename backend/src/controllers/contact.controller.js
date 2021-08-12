const Contact = require('./../models/contact.model')

const getContacts = async (req, res) => {
    const { client } = req.body
    try {
        const contacts = await Contact.find({client})
        res.status(201).json({
            status: 'success',
            data: contacts
        })
    } catch (error) {
        res.status(401).json({
            status: 'error',
            message: error.message
        })
    }
}

const getContact = async (req, res) => {
    const {id} = req.body
    try {
        const contact = await Contact.findById(id)
        res.status(201).json({
            status: 'success',
            data: contact
        })
    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const addContact = async (req, res) => {
    const { name, number } = req.body
    try {
        const contact = new Contact({
            name,
            number
        })
        await contact.save()

        res.status(201).json({
            status: 'Added Successful',
            data: contact
        })
        
    } catch(e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const editContact = async (req, res) => {
    const { id, update } = req.body
    try {
        const contact = await Contact.updateOne({_id:id}, {
            $set: update
        })

        res.status(201).json({
            status: 'Update Successful'
        })
    } catch(e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const delContact = async (req, res) => {
    const { id } = req.body
    try {
        const contact = await Contact.deleteOne({_id: id})
        res.status(201).json({
            status: 'Delete Successful'
        })
    } catch(e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

module.exports = {
    getContacts,
    getContact,
    addContact,
    editContact,
    delContact,
}