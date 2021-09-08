# textrail
An sms gateway application for trails 247 crm.


Backend Routes ( all endpoints are via POST except stated otherwise in Uppercase)
/auth/login for logins
/auth/signup for signups
GET /auth/logout for logging a user out
/addGroup, /getGroup, /getGroups, /editGroup, DELETE /delGroup, /addContactToGroup
/addContact, /getContact, /getContacts, /editContact, DELETE /delContact
/addSenderId, /getSenderIds, /editSenderId, DELETE /delSenderId
/addCampaign, /getCampaign, /getCampaigns, /editCampaign, DELETE /delCampaign
/addTemplate, /getTemplate, /getTemplates, /editTemplate, DELETE /delTemplate
check message.schema.js for message template key fields