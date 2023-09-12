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