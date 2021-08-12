const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { config } = require("dotenv")
const validator = require("validator")

config();

const jwtPrivateKey = process.env.JWT_PRIVATE_KEY.replace(/\\n/g, "\n");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User must have a name']
    },
    username: {
        type: String,
        required: [true, 'User must have a username']
    },
    email: {
        type: String,
        validate: [validator.isEmail, 'Please provide a valid email address'],
        required: [true, 'User must have an email'],
        unique: true
    },
    password : {
        type: String,
        minlength: 8,
        required: [true, "password is required"],
    },
    company: {
        type: String,
        required: [true, 'User must belong to an organization']
    },
    phoneNumber: {
        type: String,
    },
    deleted: {
        type: Boolean,
        value: false
    },
    lastLogin: Date,
}, {timestamps: true})

userSchema.pre("save", async function (next) {
    if (!this.password || !this.isModified("password")) return next;

    this.password = await bcrypt.hash(
        this.password,
        parseInt(process.env.HASH)
    );
    next();
});


userSchema.methods.toJSON = function () {
    const user = this

    const userObj = user.toObject()
    delete userObj.password
    if(userObj.deleted === true) return
    return userObj
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateVerificationToken = function () {
    return jwt.sign({id: this._id}, jwtPrivateKey, {
        expiresIn: '1d',
        algorithm: 'RS256'
    })
}

module.exports = userSchema