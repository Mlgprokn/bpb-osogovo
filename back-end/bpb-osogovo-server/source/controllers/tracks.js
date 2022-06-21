//set up express
const express = require('express');
const router = express.Router();

//Track model
const Track = require('../models/Track');

//get all tracks
router.get('/', (req, res) => {
  Track.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//add new track
router.post('/', (req, res) => {
  //create a new track
  const track = new Track({
    title: req.body.title,
    length: req.body.length,
    displacement: req.body.displacement,
    altitudeAtStartFinish: req.body.altitudeAtStartFinish,
    lowestPoint: req.body.lowestPoint,
    highestPoint: req.body.highestPoint,
    aidStration: req.body.aidStration,
    controlTime: req.body.controlTime,
    image: req.body.image,
  });

  //save the track
  track
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//update a track
router.patch('/', (req, res) => {
  //update a track
  Track.findByIdAndUpdate(req.body._id, req.body, {
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

//delete track
router.delete('/', (req, res) => {
  Track.deleteOne({
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
