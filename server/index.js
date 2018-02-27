const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const database = require('../database/index.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/photos', (req,res)=>{
  database.findPhotos(125, (error, photos)=>{
      if(error) {
        console.log(error);
      } else {
       res.send(photos[0]);
      }
    });
})

module.exports = app;