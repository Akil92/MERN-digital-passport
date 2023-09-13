import React from "react";
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users/users-service';

import DestinationPage from '../DestinationPage/DestinationPage';
import * as destinationsService from "../../utilities/destinations/destinations-service";
import DestinationDetailPage from "../DestinationDetailPage/DestinationDetailPage";
import EditDestinationReviewPage from "./EditDestinationReviewPage/EditDestinationReviewPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={ user } setUser={ setUser }/>
          <Routes>
            <Route path='/destinations' element={<DestinationPage />}  />
            <Route path='/destinations/:id' element={<DestinationDetailPage />} />
            <Route path='/:reviewId' element={<EditDestinationReviewPage/>}/>
          </Routes> 
          
        </>
        :
        <AuthPage setUser={ setUser }/>
      }
      <h1>Welcome to Digital Passport</h1>     
    <img src="Images/Traveler.webp" className="center"/>
    <h2 className="info">If you love to travel, this is the perfect app for you to use.
      Think of an app that's like a passport but even BETTER.<br></br> 
      Just lika a passport,this app is personal so nobody will have access to your trip information. <br></br>
      Reminisce on some of your favorite experiences through our review form for each trip you go on. 
    </h2>
    <h3 className="features">Features to come:<br></br>
       A drop-down list of all countries, cities. We provide you with the informationso you don't have to type it in.<br></br>
       Allowing users to upload images of their trip<br></br>
       Being able to view other user's destination reviews. This feature will help others with having additional information
       before visiting a country.
    </h3>
    </main>
  );
}


