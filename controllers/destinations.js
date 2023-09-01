const Destination = require('../models/destination');

async function create(req, res) {

    try{
      // Add the user to the database
      const destination = await Destination.create(req.body);
    } catch (err) {
       // Client will check for non-2xx status code 
       // 400 = Bad Request
      res.status(400).json(err);
    }
  }


  models.exports ={
    create,
  }