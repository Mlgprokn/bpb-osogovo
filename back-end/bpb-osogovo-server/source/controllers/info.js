//set up express
const express = require('express');
const router = express.Router();

//Info model
const Info = require('../models/Info');

//get all info
router.get('/', (req, res) => {
  Info.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//add new info
router.post('/', (req, res) => {
  //create a new info
  const info = new Info({
    description: req.body.description,
    subSections: req.body.subSections,
  });

  //save the info
  info
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//update a info
router.patch('/', (req, res) => {
  //update a info
  Info.findByIdAndUpdate(req.body._id, req.body, {
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

//delete info
router.delete('/', (req, res) => {
  Info.deleteOne({
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
