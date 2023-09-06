import React, { useState, useEffect} from "react";
import * as destinationsApi from "../../utilities/destinations/destinations-api";
import "./DestinationPage.css";
import { Link } from "react-router-dom";



export default function DestinationPage({}){
  const [destination, setDestination] = useState([]);
  useEffect(function() {
    async function getDestination() {
        const list = await destinationsApi.index();
        setDestination(list);
    }
    getDestination();
  },[])

    return(
        <div>
        <p>Destination List</p>
        <div className="list-grid">
        {destination.map((n)=> (
          <div className="list"> 
            <p>Location:</p>
            <Link to={"/destinations/" + n.country}>
              {n.city}, {n.country}
              <p>{n.travelDate}</p>
              <p>{n.returnDate}</p>
            </Link>
         </div>  
        ))}
        </div>
      </div>
    )
}