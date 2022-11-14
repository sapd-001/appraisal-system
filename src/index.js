const express = require('express');
require('./process')()
const config = require('./config');
const { baseLogger } = require('./logger');
const api = require('./api');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1',api());

app.listen(config.port, () => {
    baseLogger.info(`Server on port ${config.port}`)
}
);