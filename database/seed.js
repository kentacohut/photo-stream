let data = require('./mockdata.js');
let mongoose = require('mongoose');
let Restaurant = require('./index.js');

mongoose.connect('mongodb://localhost/photos');

let seedDb = function(photos) {
  for (let i=1; i<=200; i++){
    let shuffled = photos.sort(() => .5 - Math.random());// shuffle photos  
    let selected = shuffled.slice(0, (Math.floor(Math.random()*(4)+5))) ; // get new array between 5 - 8 photos
    Restaurant.addPhotos(i, selected);
  }
};

seedDb(data.photos);