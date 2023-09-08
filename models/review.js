const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  food: {type: String},
  weather: {type: String},
  scenery: {type: String},
  events: {type: String},
  additionalComments: {type: String},
  destination: {type: mongoose.Types.ObjectId, ref:'Destination'},
  user: {type: mongoose.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Review', reviewSchema);