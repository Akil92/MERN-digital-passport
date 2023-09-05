import { Link } from "react-router-dom";
import * as useService from '../../utilities/users/users-service';

export default function NavBar({ user, setUser }){

    function handleLogOut() {
      useService.logOut();
      setUser(null)
    }

    return(
        <nav>
            <Link to="/destinations">Destination List</Link>
            &nbsp; | &nbsp;
            <Link to="orders/new">New Order</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}!</span>
            &nbsp; | &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )

}