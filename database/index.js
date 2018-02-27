const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/photos');

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Photos database connected!');
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
  Restaurant.find({'id': id}).exec(callback);
}

module.exports.addPhotos = addPhotos;
module.exports.findPhotos = findPhotos;