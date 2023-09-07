import { useState, useEffect} from "react";
import * as destinationsApi from "../../utilities/destinations/destinations-api";
import { useParams } from "react-router-dom";
import DestinationReviewForm from "../../components/DestinationReviewForm/DestinationReviewForm";





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
  
      return(
        <div>
          <h1>Destination Detail</h1>
             {destinationDetail && <>
             <p>{destinationDetail.city}, {destinationDetail.country}</p>
              <p>{destinationDetail.travelDate}</p> 
              <p>{destinationDetail.returnDate}</p>
              <DestinationReviewForm destinationID={destinationDetail._id}/>
              </>}
           </div>  
      )
}