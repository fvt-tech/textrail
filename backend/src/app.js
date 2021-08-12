const express = require("express")
const logger = require("morgan")
const { config } = require("dotenv")
const passport = require('passport')
const cookieParser = require('cookie-parser')
const errorHandler = require("./middleware/errorHandler")
const { NotFoundError } = require("./helpers/errors")
const { authRouter, homeRouter } = require('./routes')
const session = require( 'express-session')
const passportLocal = require('./services/passport/passport-local')
const cors = require('cors')

config()

const app = express();
if (["development", "production"].includes(process.env.NODE_ENV)) {
    app.use(logger("dev"));
    app.use(logger('prod'))
}
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(session(
    {
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: true } // Remember to set this
    }
))
app.use(passport.initialize())
// passportLocal()
app.use(passport.session())
app.use(errorHandler);

app.use('/', homeRouter)
app.use('/auth', authRouter)

//if route not recognized, throw a notFoundError
app.all("*", (_, res) => {
    throw new NotFoundError('Resource not found on this server')
});

module.exports = app