const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const axios = require('axios');
const database = require('../database/index.js');
const app = express();

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/photos', (req,res)=>{
  let id = (req.query.id); // Grabs value from the params passed into URL
  database.findPhotos(id, (error, photos)=>{
      if(error) {
        console.log(error);
      } else {
       res.send(photos[0]);
       mongoose.disconnect(); // Needed to cleanly disconnect database after query
      }
    });
})

module.exports = app;