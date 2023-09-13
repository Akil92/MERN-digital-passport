import React, { useState, useEffect} from "react";
import * as destinationsApi from "../../utilities/destinations/destinations-api";
import "./DestinationPage.css";
import { Link } from "react-router-dom";
import DestinationDetailPage from "../DestinationDetailPage/DestinationDetailPage";
import DestinationForm from '../../components/DestinationForm/DestinationForm';



export default function DestinationPage({}){
  const [destination, setDestination] = useState([]);

  function onNewDestination(newDestinationData){
    console.log(newDestinationData);
    console.log(destination);
    setDestination([...destination, newDestinationData]);
  }

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
         </div>  
        ))}
        </div>
        <DestinationForm onNewDestination={onNewDestination}/>
      </div>
    )
}