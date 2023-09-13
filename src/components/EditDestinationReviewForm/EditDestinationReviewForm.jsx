import { useState } from "react";
import { useLocation } from "react-router-dom";
import * as reviewsApi from "../../utilities/reviews/reviews-api";


export default function EditDestinationReviewForm({ setReviews }){
    const location = useLocation();
    const { initReview } = location.state
    const [editReview, setEditReview] = useState({
        food: initReview.food,
        weather: initReview.weather,
        scenery: initReview.scenery,
        events: initReview.events,
        additionalComments: initReview.additionalComments
    });

    const [error, setError] = useState('');

    function handleChange(evt){
        setEditReview({...editReview, [evt.target.name]: evt.target.value});
        setError('');
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const reviewId = initReview._id;
        console.log(editReview);
        try {
          const updated = await reviewsApi.updateReview(reviewId, {...editReview});
          console.log(updated);
        } catch (error) {
          setError('An error occurred while updating the review.');
          console.error(error);
        }
      }


    return(
        <div>
          Edit Review
          <form onSubmit={handleSubmit}>
          <label>Food:</label>
          <input type="text" name="food" value={editReview.food} onChange={handleChange}/>
          <label>Weather:</label>
          <input type="text" name="weather" value={editReview.weather} onChange={handleChange}/>
          <label>Scenary:</label>
          <input type="text" name="scenery" value={editReview.scenery} onChange={handleChange}/>
          <label>Events:</label>
          <input type="text" name="events" value={editReview.events} onChange={handleChange}/>
          <label>Additional Comments:</label>
          <input type="text" name="additionalComments" value={editReview.additionalComments} onChange={handleChange}/>
          <button>Submit</button>
        </form>
        </div>
    )
}