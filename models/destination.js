const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  country: {type: String, required: true},
  city: {type: String, required: true},
  travelDate: {type: Date},
  returnDate: {
    type: Date,
    default: function() {
        return new Date(+ Date());
    },
  },
  user: {type: Schema.Types.ObjectId, ref: 'user'}
});

module.exports = mongoose.model('Destination', destinationSchema);