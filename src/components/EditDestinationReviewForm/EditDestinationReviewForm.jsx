import { useState } from "react";

export default function EditDestinationReviewForm({destinationID, setReviews}){
    const [editReview, setEditReview] = useState({
        food:'',
        weather:'',
        scenery:'',
        events:'',
        additionalComments:''
    });

    const [error, setError] = useState('');

    function handleChange(evt){
        setEditReview({...editReview, [evt.target.name]: evt.target.value});
        setError('');
    }
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
          // Send an HTTP request to update the review with the updated data
          const response = await fetch(`/api/reviews/${destinationID}`, {
            method: 'PUT', // or 'PATCH' depending on your API
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(editReview),
          });
      
          if (response.ok) {
            // The review was successfully updated, you can handle the response as needed
            // For example, you can update the reviews list with setReviews
            const updatedReview = await response.json();
            setReviews((prevReviews) =>
              prevReviews.map((r) => (r.id === updatedReview.id ? updatedReview : r))
            );
          } else {
            // Handle any error responses from the server
            setError('Failed to update the review.');
          }
        } catch (error) {
          // Handle any network or unexpected errors
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