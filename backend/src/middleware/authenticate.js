const debug = require('debug')
const passportJWT = require('../services/passport/config')
const { ApplicationError } = require('../helpers/errors')

const DEBUG = debug('dev');
module.exports = function authenticate(req, res, next) {
    passportJWT.authenticate('jwt', (err, user, info) => {
        if (!user) {
            res.status(403).send('A token is required')
        }
        
        req.user = user
        return next();
        // DEBUG(user.userName);

    })(req, res, next);
}