const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

app.use(express.static(path.join(__dirname, '../client/dist')));

module.exports = app;