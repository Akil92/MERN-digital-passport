import React, { useState, useEffect} from "react";
import * as destinationsApi from "../../utilities/destinations/destinations-api";
import "./DestinationPage.css";
import { Link } from "react-router-dom";
import DestinationDetailPage from "../DestinationDetailPage/DestinationDetailPage";
import DestinationForm from '../../components/DestinationForm/DestinationForm';



export default function DestinationPage({}){
  const [destination, setDestination] = useState([]);

  const handleDeleteDestination = async (destination) => {
    try {
      await destinationsApi.deletedDestination(destination);
      setDestination((allDestinations) => allDestinations.filter((n) => n.id !== destination));
      window.location.reload();
    } catch (error) {
      console.error("Error deleting destination:", error);
    }
  };

  useEffect(function() {
    async function getDestination() {
        const list = await destinationsApi.index();
        setDestination(list);
    }
    getDestination();
  },[])

    return(
        <div>
        <h1>Destination List</h1>
        <div className="list-grid">
        {destination.map((n)=> (
          <div className="list" key={n._id}> 
            <p>Location:</p>
            <Link to={`/destinations/${n._id}`}>
              {n.city}, {n.country}
            </Link>
            <button onClick={()=> handleDeleteDestination(n._id)}>Delete</button>
         </div>  
        ))}
        </div>
        <DestinationForm />
      </div>
    )
}