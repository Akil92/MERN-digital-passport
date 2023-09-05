import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users/users-service';
import DestinationForm from '../../components/DestinationForm/DestinationForm';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={ user } setUser={ setUser }/>
          <Routes>
            <Route path=''  />
            <Route path='' />
          </Routes>  
          <DestinationForm />
        </>
        :
        <AuthPage setUser={ setUser }/>
      }     
    </main>
  );
}


