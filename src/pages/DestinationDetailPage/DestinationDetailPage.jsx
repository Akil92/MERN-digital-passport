import { useState, useEffect} from "react";
import * as destinationsApi from "../../utilities/destinations/destinations-api";
import { useParams } from "react-router-dom";
import DestinationReviewForm from "../../components/DestinationReviewForm/DestinationReviewForm";
import * as reviewsApi from "../../utilities/reviews/reviews-api";




export default function DestinationDetailPage(){
    const { id } = useParams();
    const [destinationDetail, setDestinationDetail] = useState([]);
    useEffect(() => {
        console.log(id);
      async function getDestinationDetail() {
        try{
          const detail = await destinationsApi.getById(id);
          console.log(detail);
          setDestinationDetail(detail);
        } catch (err){
            console.log(err);
        }  
      }
      getDestinationDetail();
    },[]);

    const [review,setReview] = useState([]);
    useEffect(function() {
        async function getReview() {
            try {
              const info = await reviewsApi.index();
              setReview(info);
              console.log(info)
            } catch (error) {
              console.log(error);
            }
          }
          getReview();
        }, []);
  
      return(
        <div>
          <h1>Destination Detail</h1>
          {destinationDetail && <>
            <p>{destinationDetail.city}, {destinationDetail.country}</p>
            <p>{destinationDetail.travelDate}</p> 
            <p>{destinationDetail.returnDate}</p>
            {review.map((r)=> 
            <div className='experience'>
              <h1>Here's a review of your experience</h1>
              Food:{r.food}<br></br>
              Weather:{r.weather}<br></br>
              Scenary:{r.scenary}<br></br>
              Events:{r.events}<br></br>
              Additional Comments:{r.additionalComments}
            </div>
            )} 
            <DestinationReviewForm destinationID={destinationDetail._id}/>
          </>}
        </div>  
      )
}