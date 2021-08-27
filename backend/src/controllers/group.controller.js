const Group = require('./../models/group.model')
const Contact = require('./../models/contact.model')

const getGroups = async (req, res) => {
    const { user } = req.body
    try {
        const groups = await Group.find({ user }).populate('contacts')
        res.status(201).json({
            status: 'success',
            data: groups
        })
    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const getGroup = async (req, res) => {
    const { id } = req.body
    try {
        const group = await Group.findById(id)
        res.status(201).json({
            status: 'success',
            data: group
        })

    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const addGroup = async (req, res) => {
    const { name, contacts, user } = req.body
    try {
        const nContacts = []
        contacts.forEach(async (item) => {
            const contact = new Contact({
                name: item.name,
                number: item.number,
                user
            })
            await contact.save()
            nContacts.push(contact._id)
        });
        const group = new Group({
            name,
            contacts: nContacts,
            user
        })
        await group.save()
        res.status(201).json({
            status: 'success',
            data: group
        })
    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message,
        })
    }
}

const editGroup = async (req, res) => {
    const { id, update } = req.body
    try {
        const group = await Group.updateOne({ _id: id }, {
            $set: update
        })
        res.status(201).json({
            status: 'update successful',
        })
    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const delGroup = async (req, res) => {
    const { id } = req.body
    try {
        await Group.deleteOne({ _id: id })
        res.status(201).json({
            status: 'successfully deleted',
        })
    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

const addContactToGroup = async (req, res) => {
    const { id, contact, user } = req.body
    try {
        const group = await Group.findById(id)
        if (Array.isArray(contact)) {
            contact.forEach(async (item) => {
                const newContact = new Contact({
                    name: item.name,
                    number: item.number,
                    user
                })
                await newContact.save()
                group.contacts.push(newContact._id)
            })
            res.status(201).json({
                status: 'Addition successful',
                data: group
            })
        }
        //implement adding contacts that already exist in the system
        
        const nContact = new Contact(contact)
        await nContact.save()

        group.contacts.push(nContact._id)
        await group.save()

        res.status(201).json({
            status: 'Addition successful',
            data: group
        })

    } catch (e) {
        res.status(401).json({
            status: 'error',
            message: e.message
        })
    }
}

module.exports = {
    getGroups,
    getGroup,
    addGroup,
    editGroup,
    delGroup,
    addContactToGroup
}