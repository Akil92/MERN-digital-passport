import { useState } from "react";
import * as destinationsService from "../../utilities/destinations/destinations-service";
import DatePicker from 'react-datepicker';


export default function DestinationForm(){
  const [destinations, setDestinations] = useState({
    country:'',
    city:'',
    travelDate:'',
    returnDate:''
  });

  const [error, setError] = useState('');
  const [date, setDate] = useState(new Date());

  function handleChange(evt) {
    setDestinations({ ...destinations, [evt.target.name]: evt.target.value });
    setError('');
  }
  
  async function handleSubmit(evt){
    evt.preventDefault();
    try {
        const newDestination = await destinationsService.create(/* data */);
        console.log(newDestination);
        setDestinations(newDestination);
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
            <input type="text" name="city" value={destinations.city} onChange={handleChange} required></input>
            <label>Travel Date:</label>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
            <label>Return Date:</label>
            <input type="date" name="returnDate" value={destinations.returnDate} selected={date} onChange={(date) => setDate(date)}></input>
            <button>Submit</button>
          </form>
        </div>
    )
}