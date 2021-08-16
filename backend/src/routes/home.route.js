const { Router } = require('express')
const homeRouter = Router()
const { addGroup, getGroup, getGroups, editGroup, delGroup, addContactToGroup } = require('./../controllers/group.controller')
const { getContact, getContacts, addContact, editContact, delContact } = require('./../controllers/contact.controller')
const { addSenderId, getSenderIds, delSenderId, editSenderId } = require('./../controllers/sender.controller')
const { addCampaign, getCampaign, getCampaigns, editCampaign, delCampaign } = require('./../controllers/campaign.controller')
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

//sender
homeRouter.post('/addSenderId', authenticate, addSenderId)
homeRouter.post('/editSenderId', authenticate, editSenderId)
homeRouter.post('/getSenderIds', authenticate, getSenderIds)
homeRouter.delete('/delSenderId', authenticate, delSenderId)

//campaigns
homeRouter.post('/addCampaign', addCampaign)
homeRouter.post('/getCampaign', getCampaign)
homeRouter.post('/getCampaigns', getCampaigns)
homeRouter.post('/editCampaign', editCampaign)
homeRouter.delete('/delCampaign', delCampaign)
module.exports = homeRouter