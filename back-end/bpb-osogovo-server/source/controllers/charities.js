//set up express
const express = require('express');
const router = express.Router();

//charity model
const Charity = require('../models/Charity');

//get all charity
router.get('/', (req, res) => {
  Charity.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//add new charity
router.post('/', (req, res) => {
  //create a new charity
  const charity = new Charity({
    image: req.body.image,
    description: req.body.description,
    year: req.body.year,
  });

  //save the charity
  Charity.save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//update a charity
router.patch('/', (req, res) => {
  //update a charity
  Charity.findByIdAndUpdate(req.body._id, req.body, {
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

//delete charity
router.delete('/', (req, res) => {
  Charity.deleteOne({
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
