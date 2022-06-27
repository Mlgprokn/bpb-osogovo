const mongoose = require('mongoose');

const InfoSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  subSections: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model('Info', InfoSchema);
