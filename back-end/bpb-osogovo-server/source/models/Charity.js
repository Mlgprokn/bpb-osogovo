const mongoose = require('mongoose');

const CharitySchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Charities', CharitySchema);
