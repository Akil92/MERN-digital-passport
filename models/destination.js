const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  country: {type: String, required: true},
  city: {type: String, required: true},
  travelDate: {type: Date},
  returnDate: {type: Date}
})

module.exports = mongoose.model('User', userSchema);