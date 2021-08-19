const passport = require("passport")
const debug = require("debug")
const { ApplicationError, NotFoundError } = require("../helpers/errors")

const DEBUG = debug("dev");

const createCookieFromToken = (user, statusCode, req, res) => {
    const token = user.generateVerificationToken();

    //cookies expire after 10days
    const cookieOptions = {
        expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: req.secure || req.headers["x-forwarded-proto"] === "https",
    };

    res.cookie("jwt", token, cookieOptions);
    // console.log(req)
    // res.status(200).json({
    //     status: 'success'
    // })
    res.status(statusCode).json({
        status: "success",
        token,
        data:user   
    });
};

const signup = async (req, res, next) => {
    passport.authenticate(
        "signup", async (err, user, info) => {
            try {
                if(err || !user) {
                    const {statusCode = 400, message} = info
                    res.status(statusCode).json({
                        status: 'error',
                        message
                    })
                }
                // createCookieFromToken(user, statusCode = 201, req, res)
                res.status(201).json({
                    status: 'SignUp successful! You can now login',
                    data: user
                })
            } catch (e) {
                res.status(500).json({
                    status: 'error',
                    message: e.message
                })
            }
        })(req, res, next)
}

const login = async (req, res, next) => {
    passport.authenticate(
        "login", async (err, user, info) => {
            try {
                if(err || !user) {
                    const {statusCode = 400, message} = info
                    res.status(statusCode).json({
                        status: 'error',
                        message
                    })
                }
                createCookieFromToken(user, 201, req, res)
            }
            catch(e) {
                res.status(500).json({
                    status: 'error',
                    message: e.message
                })
            }
        })(req, res, next)
}

const logout = async (req, res) => {
    passport.authenticate('jwt', async (err, user, info) => {
        res.clearCookie('jwt');
        // await createAudit('User Logout', '', user)
        res.status(200).send('Successfully Logged out')
        // res.send({user: {username: '', role: ''}, success: true});
    })(req, res)
}

module.exports = {
    signup,
    login,
    logout
}

