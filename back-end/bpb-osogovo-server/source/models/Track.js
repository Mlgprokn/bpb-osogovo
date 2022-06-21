const mongoose = require('mongoose');

const TrackSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
  displacement: {
    type: String,
    required: true,
  },
  altitudeAtStartFinish: {
    type: String,
    required: true,
  },
  lowestPoint: {
    type: String,
    required: true,
  },
  highestPoint: {
    type: String,
    required: true,
  },
  aidStration: {
    type: Boolean,
    default: false,
  },
  controlTime: {
    type: String,
    default: 'Няма',
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Tracks', TrackSchema);
