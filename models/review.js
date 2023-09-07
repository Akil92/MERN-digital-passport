const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  food: {type: String},
  weather: {type: String},
  scenary: {type: String},
  events: {type: String},
  additionalComments: {type: String}
})

module.exports = mongoose.model('Review', reviewSchema);