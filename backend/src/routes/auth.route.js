const { Router } = require('express')
const { login, signup, logout } = require("../controllers/auth.controller")
const catchAsync = require("../middleware/catchAsync")
const passport = require('passport')
const passportJWT = require("../services/passport/config")
const session = require('express-session')

const authRouter = Router()

authRouter.use(session(
    {
        secret: 'xnoq4nxs14bkue8n13uy',
        resave: false,
        saveUninitialized: false
    }
))
authRouter.use(passport.initialize())
authRouter.use(passport.session())


authRouter.get('/', (req, res) => {
    res.send('Works')
})
authRouter.post('/signup', catchAsync(signup))
authRouter.post('/login', catchAsync(login))
authRouter.post('/logout', catchAsync(logout))

module.exports = authRouter