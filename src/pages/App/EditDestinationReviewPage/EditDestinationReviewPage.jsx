import { useState } from "react";
import EditDestinationReviewForm from "../../../components/EditDestinationReviewForm/EditDestinationReviewForm";

export default function EditDestinationReviewPage({initReview}){
    const [review, setReview] = useState({initReview});

    return(
        <div>
          <EditDestinationReviewForm initReview={initReview} setReview={setReview} /> 
        </div>
    )
}