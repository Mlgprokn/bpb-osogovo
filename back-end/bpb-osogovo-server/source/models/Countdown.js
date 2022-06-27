const mongoose = require('mongoose');

const CountdownSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Countdowns', CountdownSchema);
