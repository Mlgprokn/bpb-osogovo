const mongoose = require('mongoose');

const SponsorSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  sponsorWebsite: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('Sponsors', SponsorSchema);
