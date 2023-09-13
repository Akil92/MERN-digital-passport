const Review = require('../models/review');
const Destination = require('../models/destination')


async function index(req, res) {
  console.log(req.body, 'request');
  const review = await Review.find({destination: req.params.id});
  res.json(review);
}

async function addReview(req, res) {
  console.log(req.user);
  try {
    const destinationId = req.params.id;
    const reviewData = await req.body; 
    const destination = await Destination.findById(destinationId);
    if (!destination) {
      return res.status(404).json({'message': 'Destination not found'});
    }
    reviewData.destination = destination._id;
    reviewData.user = req.user._id;
    const review = await Review.create(reviewData);
    const reviews = await Review.find({ destination: destination._id }).exec()
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
}

async function deleteReview(req, res) {
  try {
    const reviewId = req.params.reviewId;
    const deletedReview = await Review.findByIdAndDelete(reviewId);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


async function updateReview(req, res) {
  try {
    const updatedReview = await Review.findOneAndUpdate( 
    {_id: req.params.reviewId,},
    req.body,
    {new: true},
  );
  if (!updatedReview) {
    return res.status(404).json({message: "Review not found."});
  }
  res.json(updatedReview);
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports ={
  index,
  addReview,
  deleteReview,
  updateReview
}