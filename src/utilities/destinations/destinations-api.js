import sendRequest from "../users/send-request";

// This is the base path of the Express route we'll define
const BASE_URL = '/api/destinations';

export async function create(destination) {
    return sendRequest(BASE_URL, 'POST', destination);
  }