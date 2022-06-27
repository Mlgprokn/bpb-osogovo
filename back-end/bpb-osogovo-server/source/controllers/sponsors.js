//set up express
const express = require('express');
const router = express.Router();

//sponsor model
const Sponsor = require('../models/Sponsor');

//get all sponsor
router.get('/', (req, res) => {
  Sponsor.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//add new sponsor
router.post('/', (req, res) => {
  //create a new sponsor
  const sponsor = new Sponsor({
    image: req.body.image,
    sponsorWebsite: req.body.sponsorWebsite,
  });

  //save the sponsor
  sponsor
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//update a sponsor
router.patch('/', (req, res) => {
  //update a sponsor
  Sponsor.findByIdAndUpdate(req.body._id, req.body, {
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

//delete sponsor
router.delete('/', (req, res) => {
  Sponsor.deleteOne({
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
