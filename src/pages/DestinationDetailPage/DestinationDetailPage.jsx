import { useState, useEffect } from "react";
import * as destinationsApi from "../../utilities/destinations/destinations-api";
import { useParams } from "react-router-dom";
import DestinationReviewForm from "../../components/DestinationReviewForm/DestinationReviewForm";
import * as reviewsApi from "../../utilities/reviews/reviews-api";
import "./DestinationDetailPage.css";
import "../../components/DestinationReviewForm/DestinationReviewForm";




export default function DestinationDetailPage(){
    const { id } = useParams();
    const [destinationDetail, setDestinationDetail] = useState([]);
    const [reviews,setReviews] = useState([]);
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
              <p>{destinationDetail.travelDate}</p> 
              <p>{destinationDetail.returnDate}</p>
            </div>
            {reviews.map((r)=> (
             <div key={r.id}className="experience">
              <h1>Here's a review of your experience</h1>
              Food:{r.food}<br></br>
              Weather:{r.weather}<br></br>
              Scenery:{r.scenery}<br></br>
              Events:{r.events}<br></br>
              Additional Comments:{r.additionalComments}
            </div>
            ))} 
            <DestinationReviewForm destinationID={destinationDetail._id} setReviews={setReviews}/>
          </>}
        </div>  
      )
}
