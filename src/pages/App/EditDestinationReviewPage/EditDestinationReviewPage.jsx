import { useState } from "react";
import EditDestinationReviewForm from "../../../components/EditDestinationReviewForm/EditDestinationReviewForm";

export default function EditDestinationReviewPage({initReview}){
    const [review, setReview] = useState({initReview});

    return(
        <div>
            Edit Review
          <EditDestinationReviewForm initReview={initReview} setReview={setReview} /> 
        </div>
    )
}