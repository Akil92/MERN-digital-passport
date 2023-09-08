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

async function index(req, res) {
  console.log(req.body, 'request');
  const review = await Review.find({});
  res.json(review);
}

module.exports ={
  create,
  index
}