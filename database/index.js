var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photos');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Photos database connected!');
});

var photosSchema = mongoose.Schema({
  id: Number, //Restaurant ID
  photos: [] //Array of associated photos
});

var Restaurant = mongoose.model('Restaurant', photosSchema);

var addRestaurant = (id, photos) => {
  var entry = new Restaurant({
    id: id,
    photos: photos
  });

  entry.save((error)=>{
    if(error){
      console.log(error);
    } else {
      console.log('Entry saved!');
    }
  });
};

var findPhotos = (id, callback) => {
  callback(Restaurant.find({}));
}

addRestaurant(1, [1,2,3,4,5]);

module.exports.addRestaurant = addRestaurant;
module.exports.findPhotos = findPhotos;

//http://s3-media3.fl.yelpcdn.com/bphoto/${photo_id}/o.jpg