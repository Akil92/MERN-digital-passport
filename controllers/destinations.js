const Destination = require('../models/destination');
const Review = require('../models/review');

async function create(req, res) {
    console.log(req.body,'request');
    try{
      const destination = await Destination.create(req.body);
      res.json(destination)
    } catch (err) {
        console.log(err);
       // 400 = Bad Request
      res.status(400).json(err);
    }
  }


async function index(req, res) {
  const destination = await Destination.find({});
  res.json(destination);
  } 

async function getById(req, res) {
try {
    const destinationID = req.params.id; 
    const destination = await Destination.findById(destinationID);
    if (!destination) {
    // If the destination with the specified ID is not found
    return res.status(404).json({ message: 'Destination not found' });
    }
    // If the destination is found
    const reviews = await Review.find({ destination: destination._id }).exec()
    console.log(reviews);
    return res.status(200).json({destination, reviews});
} catch (error) {
    // Handle errors
    return res.status(500).json({ message: 'Internal server error' });
}
}


  module.exports ={
    create,
    index,
    getById
  }