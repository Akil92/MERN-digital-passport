import sendRequest from "../users/send-request";

// This is the base path of the Express route we'll define
const BASE_URL = '/api/destinations';

export async function create(destination) {
    return sendRequest(BASE_URL, 'POST', destination);
  }

export async function index() {
    return sendRequest(BASE_URL, 'GET');
}

export async function getById(destinationID) {
    return sendRequest(`${BASE_URL}/${destinationID}`, 'GET'); 
}

export async function deletedDestination(destination) {
    return sendRequest(`${BASE_URL}/${destination}`, 'DELETE');
}