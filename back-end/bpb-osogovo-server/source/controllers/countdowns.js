//set up express
const express = require('express');
const router = express.Router();

//countdown model
const Countdown = require('../models/Countdown');

//get all countdown
router.get('/', (req, res) => {
  Countdown.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//add new countdown
router.post('/', (req, res) => {
  //create a new countdown
  const countdown = new Countdown({
    date: req.body.date,
  });

  //save the countdown
  countdown
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//update a countdown
router.patch('/', (req, res) => {
  //update a countdown
  Countdown.findByIdAndUpdate(req.body._id, req.body, {
    runValidators: true,
    new: true,
  })
    .then((data) => {
      if (!data) {
        return res.status(404).json({
          message: 'Record not found',
        });
      } else {
        return res.status(201).json(data);
      }
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//delete countdown
router.delete('/', (req, res) => {
  Countdown.deleteOne({
    _id: req.body._id,
  })
    .then((data) => {
      if (!data) {
        return res.status(404).json({
          message: 'Record not found',
        });
      } else {
        return res.status(201).json(data);
      }
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//export routes
module.exports = router;
