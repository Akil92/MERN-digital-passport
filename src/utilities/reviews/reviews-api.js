import sendRequest from "../users/send-request";

const BASE_URL = '/api/reviews';

export async function create(review, destinationID){
  return sendRequest(`${BASE_URL}/${destinationID}`, 'POST', review);
}

export async function index(review, destinationID){
  return sendRequest(`${BASE_URL}/${destinationID}`, 'GET', review);
}