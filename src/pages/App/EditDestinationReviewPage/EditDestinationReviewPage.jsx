import EditDestinationReviewForm from "../../../components/EditDestinationReviewForm/EditDestinationReviewForm";

export default function EditDestinationReviewPage(){
    return(
        <div>
            Edit Review
          <EditDestinationReviewForm destinationID={destinationID} setReviews={setReviews} /> 
        </div>
    )
}