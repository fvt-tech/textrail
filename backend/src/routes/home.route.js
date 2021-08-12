const { Router } = require('express')
const homeRouter = Router()
const { addGroup, getGroup, getGroups, editGroup, delGroup, addContactToGroup } = require('./../controllers/group.controller')
const { getContact, getContacts, addContact, editContact, delContact } = require('./../controllers/contact.controller')
const authenticate = require('./../middleware/authenticate')

homeRouter.get('/', (req, res) => {
    res.send('Successfully works')
})
//contacts
homeRouter.post('/addContact', authenticate, addContact)
homeRouter.post('/getContacts', authenticate, getContacts)
homeRouter.post('/getContact', authenticate, getContact)
homeRouter.post('/editContact', authenticate, editContact)
homeRouter.delete('/delContact', authenticate, delContact)

//groups
homeRouter.post('/addGroup', authenticate, addGroup)
homeRouter.post('/getGroup', authenticate, getGroup)
homeRouter.post('/getGroups', authenticate, getGroups)
homeRouter.post('/editGroup', authenticate, editGroup)
homeRouter.delete('/delGroup', authenticate, delGroup)
homeRouter.post('/addContactToGroup', authenticate, addContactToGroup)
module.exports = homeRouter