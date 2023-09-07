const Review = require('../models/review');

async function create(req, res) {
    console.log(req.body,'request');
    try{
      const review = await Review.create(req.body);
     res.json(review);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

module.exports ={
  create
}