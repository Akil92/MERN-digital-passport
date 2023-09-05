const Destination = require('../models/destination');

async function create(req, res) {
    console.log(req.body,'request');
    try{
      // Add the user to the database
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


  module.exports ={
    create,
    index,
  }