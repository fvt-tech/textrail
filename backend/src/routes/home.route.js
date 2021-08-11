const { Router } = require('express')
const homeRouter = Router()

homeRouter.get('/', (req, res) => {
    res.send('Successfully works')
})
module.exports = homeRouter