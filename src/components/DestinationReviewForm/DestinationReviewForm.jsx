import { useState } from "react" 
import * as reviewService from "../../utilities/reviews/reviews-service";


export default function DestinationReviewForm({ destinationID }){
    console.log(destinationID);
    const [review, setReview] = useState({
        food:'',
        weather:'',
        scenery:'',
        events:'',
        additionalComments:''
    });

    const [error, setError] = useState('');

    function handleChange(evt) {
        setReview({...review, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
      evt.preventDefault();
      try {
        const newReview = await reviewService.create(review, destinationID);
        console.log(newReview);
        setReview({
          food:'',
          weather:'',
          scenery:'',
          events:'',
         additionalComments:'' 
        });
      } catch (err) {
        console.log(err);
        setError('Adding Review Failed-Try Again');
      }
    }


  return(
    <div>
      <h1>Review Form</h1>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <label>Food:</label>
          <input type="text" name="food" value={review.food} onChange={handleChange}/>
          <label>Weather:</label>
          <input type="text" name="weather" value={review.weather} onChange={handleChange}/>
          <label>Scenary:</label>
          <input type="text" name="scenery" value={review.scenery} onChange={handleChange}/>
          <label>Events:</label>
          <input type="text" name="events" value={review.events} onChange={handleChange}/>
          <label>Additional Comments:</label>
          <input type="text" name="additionalComments" value={review.additionalComments} onChange={handleChange}/>
          <button>Submit</button>
        </form>
        </div>
    </div>
  )
}