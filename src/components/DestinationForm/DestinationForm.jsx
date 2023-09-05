import { useState } from "react";
import * as destinationsService from "../../utilities/destinations/destinations-service";



export default function DestinationForm({}){
  const [destinations, setDestinations] = useState({
    country:'',
    city:'',
    travelDate:'',
    returnDate:'',
  });

  const [error, setError] = useState('');

  function handleChange(evt) {
    setDestinations({ ...destinations, [evt.target.name]: evt.target.value });
    setError('');
  }
  
  async function handleSubmit(evt){
    evt.preventDefault();
    try {
        const newDestination = await destinationsService.create(destinations);
        console.log(newDestination);
        setDestinations({
            country: '',
            city: '',
            travelDate: '',
            returnDate: ''
        });
      } catch(err) {
          console.log(err);
        setError('Adding Destination Failed - Try Again');
      }
    }
 

    return(
        <div className='form'>
            
          New Destination
          <form onSubmit={handleSubmit}>
            <label>Country:</label>
            <input type="text" name="country" value={destinations.country} onChange={handleChange} required></input>
            <label>City:</label>
            <input type="text" name="city" value={destinations.city} onChange={handleChange}></input>
            <label>Travel Date:</label>
            <input type="date" name="travelDate" value={destinations.travelDate} onChange={handleChange}></input>
            <label>Return Date:</label>
            <input type="date" name="returnDate" value={destinations.returnDate} onChange={handleChange}></input>
            <button>Submit</button>
          </form>
        </div>
    )
}