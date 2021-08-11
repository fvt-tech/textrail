const http = require('http')
const debug = require('debug')
const { config } = require('dotenv')
const app = require('./app')
require('./db/mongoose')

config()
const DEBUG = debug("prod");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

process.on("uncaughtException", (error, origin) => {
    DEBUG(`uncaught exception: ${error.message}`);
    DEBUG(`----- Exception origin -----: ${origin}`)
    // process.exit(1);
});

process.on("unhandledRejection", (err) => {
    DEBUG(err);
    DEBUG("Unhandled Rejection:", {
        name: err.name,
        message: err.message || err,
    });
    // process.exit(1);
});

server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`)
    DEBUG(
        `server running on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
    );
});