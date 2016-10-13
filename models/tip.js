var mongoose = require('mongoose');

var tipSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId
    // required: true
  },
  parkingType: {
    type: String,
    enum: ['Street', 'Outdoor Lot', 'Indoor Lot']
  },
  coordinates: {
    // type: {
    lat: Number,
    lng: Number
    // },
    // required: true
  },
  comment: {
    message: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  validHours: [
    {
      day: String,
      startTime: String,
      endTime: String
    }
  ],
  permit: {
    type: Boolean
    // required: true
  },
  cost: String,
  costExceptions: String,
  maxTime: String,
  flagged: Number
});


module.exports = mongoose.model('Tip', tipSchema);

