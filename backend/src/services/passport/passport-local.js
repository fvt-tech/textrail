const debug = require('debug')
const { Strategy } = require('passport-local')
const passport = require('./config')
// const { createAudit } = require('./../../controllers/audit.controller')

const User = require('../../models/user.model')

const DEBUG = debug('dev')

const authFields = {
    usernameField: 'username',
    passwordField: 'password',
}

passport.use(
    'login',
    new Strategy(authFields, async (username, password, done) => {
        try {
            const user = await User.findOne({
                $or: [{ email: username }, { username: username }],
            });
            if (!user || !user.password) {
                return done(null, false, { message: 'Email is not registered.' });
            }

            const checkPassword = await user.comparePassword(password);

            if (!checkPassword) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            user.lastLogin = Date.now()
            user.markModified('lastLogin')
            await user.save();
            // await createAudit('User Login', '', user._id)
            return done(null, user, { message: 'Logged In Successfully' });
        } catch (err) {
            DEBUG(err);
            return done(null, false, { statusCode: 400, message: err.message });
        }
    }),
)
passport.serializeUser((user, done) => done(null, user._id))
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
})

passport.use(
    'signup',
    new Strategy({ authFields, passReqToCallback: true }, async (req, email, password, cb) => {
        try {
            const checkEmail = await User.checkExistingField('email', req.body.email);

            if (checkEmail) {
                return cb(null, false, {
                    statusCode: 409,
                    message: 'Email already registered, log in instead',
                });
            }

            const checkUsername = await User.checkExistingField('username', req.body.username);
            if (checkUsername) {
                return cb(null, false, {
                    statusCode: 409,
                    message: 'Username exists, please try another',
                });
            }

            const newUser = new User();
            newUser.name = req.body.name;
            newUser.username = req.body.username;
            newUser.email = req.body.email;
            newUser.password = req.body.password;
            newUser.company = req.body.company;
            newUser.phoneNumber = req.body.phoneNumber
            await newUser.save();

            return cb(null, newUser, { statusCode: 200, message: 'success' });
        } catch (err) {
            DEBUG(err)
            return cb(null, false, { statusCode: 400, message: err.message });
        }
    }),
);

module.exports = passport
