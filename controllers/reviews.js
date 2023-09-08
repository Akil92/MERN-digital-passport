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

async function addReview(req, res) {
  console.log("addReview");
  try{
    let review = await Review.findById(req.body.reviewId);
    let destination = await Destination.findOne({"review": req.body.review});
    console.log(req.body);
    console.log(review);
    console.log(destination);
    console.log("anything");
    if (destination !== null) {
      destination.review.push(review);
      await destination.save();  
    } else {
      console.log("Destination not found");
    }
    } catch (err) {
      console.log(err);
  } 
}  

module.exports ={
  create,
  index,
  addReview,
}