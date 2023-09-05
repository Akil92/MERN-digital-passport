import * as destinationsAPI from "../destinations/destinations-api";

export async function create(destinations){
    const destination = await destinationsAPI.create(destinations);
    localStorage.setItem('destination', destination);
    return destination;
};