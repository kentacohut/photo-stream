const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');


app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(3001, () => console.log('Photos listening on port 3001!'));