const mongoose = require('mongoose');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.on('connected', () => {
  console.log('Photos database connected!');
});

db.on('disconnected', () => {
  console.log('Photos database disconnected!');
});

let photosSchema = mongoose.Schema({
  id: {type: Number, unique: true}, //Restaurant ID 
  photos: [] //Array of associated photos
});

let Restaurant = mongoose.model('Restaurant', photosSchema);

let addPhotos = (id, photos) => {
  let entry = new Restaurant({
    id: id,
    photos: photos
  });

  entry.save()
  .then(console.log('Entry saved!'))
  .catch(error=>console.log(error));
};

let findPhotos = (id, callback) => {
  mongoose.connect('mongodb://localhost/photos');
  Restaurant.find({'id': id}).exec(callback);
}

module.exports.addPhotos = addPhotos;
module.exports.findPhotos = findPhotos;