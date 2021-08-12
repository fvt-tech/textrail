const debug = require('debug')
const passportJWT = require('../services/passport/config')
const { ApplicationError } = require('../helpers/errors')

const DEBUG = debug('dev');
module.exports = function notAuthenticated(req, res, next) {
    passportJWT.authenticate('jwt', (err, user, info) => {
        if (!user) {
            req.session.message = req.session.message ? 'Incorrect Login Credentials' : ''
            return next()
            // throw new ApplicationError(
            //     401,
            //     'invalid token, please log in or sign up',
            // );
        }
        req.session.user = user
        // DEBUG(user);
        return res.redirect('/crm')

    })(req, res, next);

}