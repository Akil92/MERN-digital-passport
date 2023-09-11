import * as reviewsApi from "../reviews/reviews-api";


export async function index(review, destinationID) {
    const reviews = await reviewsApi.index(review, destinationID);
    return reviews;
}

export async function addReview(reveiw, destinationID) {
  const reviews = await reviewsApi.addReview(reveiw, destinationID);
  return reviews;
}