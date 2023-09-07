import * as destinationsAPI from "../destinations/destinations-api";

export async function create(destinations){
    const destination = await destinationsAPI.create(destinations);
    localStorage.setItem('destination', destination);
    return destination;
};

export async function index(destinaitons) {
    const destination = await destinationsAPI.index(destinaitons);
    return destination;
}

export async function getById(destinationID) {
    const destination = await destinationsAPI.getById(destinationID);
    return destination;
}