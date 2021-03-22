// required modules
const express = require('express');
const config = require('./config');

// app configuration
const app = express();

app.get('/', (req, res) => {
    res.send('nodejs.dev')
});

// server startup
(() => {
    app.listen(config.port, () => {
        console.log(`server has started at localhost:${config.port} and is running in ${process.env.NODE_ENV} mode.`);
    });
})();

// server shutdown 
process.on('SIGTERM', () => {
    server.close(() => {
        console.log('process has been terminated');
    });
});

