const mongoose = require('mongoose')
const { config } = require('dotenv')
const debug = require('debug')

config()
const DEBUG = debug('dev')

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
};
const mongoUrl = process.env.MONGODB_URI

mongoose
    .connect(mongoUrl, options)
    .then(() => {
        DEBUG("MongoDB is connected");
    })
    .catch((err) => {
        DEBUG("MongoDB connection unsuccessful");
        DEBUG(err);
    });