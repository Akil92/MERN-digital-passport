import React from "react";
import { Link } from "react-router-dom";
import * as useService from '../../utilities/users/users-service';
import "./NavBar.css"

export default function NavBar({ user, setUser }){

    function handleLogOut() {
      useService.logOut();
      setUser(null)
    }

    return(
        <nav className="nav">
            <Link to="/destinations">Destination List</Link>
            &nbsp; | &nbsp;
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}!</span>
            &nbsp; | &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )

}