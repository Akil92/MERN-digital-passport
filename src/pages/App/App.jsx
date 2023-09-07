import React from "react";
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users/users-service';
import DestinationForm from '../../components/DestinationForm/DestinationForm';
import DestinationPage from '../DestinationPage/DestinationPage';
import * as destinationsService from "../../utilities/destinations/destinations-service";
import DestinationDetailPage from "../DestinationDetailPage/DestinationDetailPage";

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
          </Routes>  
          <img alt='' src='../../public/images/Traveler.webp'></img>
          <DestinationForm />
        </>
        :
        <AuthPage setUser={ setUser }/>
      }     
    </main>
  );
}


