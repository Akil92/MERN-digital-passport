import sendRequest from "../users/send-request";

const BASE_URL = '/api/reviews';


export async function index(review, destinationID){
  return sendRequest(`${BASE_URL}/${destinationID}`, 'GET', review);
}

export async function addReview(review, destinationID) {
  return sendRequest(`${BASE_URL}/${destinationID}`, 'POST', review);
}

export async function deleteReview(destinationID) {
  return sendRequest(`${BASE_URL}/${destinationID}`, 'DELETE');
}

export async function editReview(reviewId) {
  return sendRequest(`${BASE_URL}/${reviewId}`, 'GET');
}

export async function updateReview(reviewId, updatedReview) {
  return sendRequest(`${BASE_URL}/${reviewId}`, 'PUT', updatedReview);
}