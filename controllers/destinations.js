const Destination = require('../models/destination');

async function create(req, res) {
    console.log(req.body,'request');
    try{

      const destination = await Destination.create(req.body);
    } catch (err) {
        console.log(err);
       // Client will check for non-2xx status code 
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
    const destination = await Destination.findById(destinationID); // Replace with your actual data retrieval logic

    if (!destination) {
    // If the destination with the specified ID is not found, return a 404 error
    return res.status(404).json({ message: 'Destination not found' });
    }

    // If the destination is found, return it as a response
    return res.status(200).json(destination);
} catch (error) {
    // Handle errors, e.g., database errors
    return res.status(500).json({ message: 'Internal server error' });
}
}


  module.exports ={
    create,
    index,
    getById
  }