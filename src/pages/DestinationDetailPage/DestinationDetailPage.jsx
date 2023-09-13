import { useState, useEffect } from "react";
import * as destinationsApi from "../../utilities/destinations/destinations-api";
import { useParams} from "react-router-dom";
import DestinationReviewForm from "../../components/DestinationReviewForm/DestinationReviewForm";
import * as reviewsApi from "../../utilities/reviews/reviews-api";
import "./DestinationDetailPage.css";
import "../../components/DestinationReviewForm/DestinationReviewForm";
import EditDestinationReviewForm from "../../components/EditDestinationReviewForm/EditDestinationReviewForm";
import { Link } from "react-router-dom";




export default function DestinationDetailPage(){
    const { id } = useParams();
    const [destinationDetail, setDestinationDetail] = useState([]);
    
    const [reviews,setReviews] = useState([]);
    const formatted = new Date(destinationDetail.travelDate).toLocaleDateString("en", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });

    const formatted1 = new Date (destinationDetail.returnDate).toLocaleDateString("en", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });

    const handleDeleteReview = async (reviewId) => {
      try {
        await reviewsApi.deleteReview(reviewId);
        setReviews((allReviews) => allReviews.filter((r) => r.id !== reviewId));
        window.location.reload();
      } catch (error) {
        console.error("Error deleting review:", error);
      }
    };

    useEffect(() => {
        console.log(id);
      async function getDestinationDetail() {
        try{
          const response = await destinationsApi.getById(id);
          setDestinationDetail(response.destination);
          setReviews(response.reviews);
        } catch (err){
            console.log(err);
        }  
      }
      getDestinationDetail();
    },[]);

      return(
        <div key={id}>
          <h1>Destination Detail</h1>
          {destinationDetail && <>
            <div className="detailP">
              <p>{destinationDetail.city}, {destinationDetail.country}</p>
              <p>Travel Date: {formatted}</p> 
              <p>Return Date: {formatted1}</p>
            </div>
            {reviews.map((r)=> (
             <div key={r.id} className="experience">
                <div className="reviewList">
                  <h1>Here's a review of your experience</h1>
                  <p className="category">Food:</p>{r.food}<br></br>
                  <p className="category">Weather:</p>{r.weather}<br></br>
                  <p className="category">Scenery:</p>{r.scenery}<br></br>
                  <p className="category">Events:</p>{r.events}<br></br>
                  <p className="category">Additional Comments:</p>{r.additionalComments}
                  <Link to={`/${r._id}`} state={{initReview: r}}>
                    <button>Edit</button>
                  </Link>
                  { <button onClick={() => handleDeleteReview(r._id)}>Delete</button> }
                </div>
              </div>
            ))} 
            <DestinationReviewForm  destinationID={destinationDetail._id} setReviews={setReviews} />
          </>}
        </div>  
      )
}
