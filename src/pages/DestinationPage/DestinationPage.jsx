import { useState, useEffect} from "react";
import * as destinationsApi from "../../utilities/destinations/destinations-api";



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
        {destination.map((n)=> (
          <div>
          <p>destination</p>
          <p>{n.country}</p>
          <p>{n.city}</p>
          <p>{n.travelDate}</p>
          <p>{n.returnDate}</p>
         </div>  
        ))}
      </div>
    )
}