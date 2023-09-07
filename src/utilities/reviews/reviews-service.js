import * as reviewsApi from "../reviews/reviews-api";

export async function create(review,destinationID) {
  const reviews = await reviewsApi.create(review, destinationID);
  return reviews;
}