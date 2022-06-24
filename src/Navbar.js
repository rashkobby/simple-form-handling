import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 

        <nav className="navbar">
            <div className="links">
                <Link to="/">Logs</Link>
                <Link to="/Dashboard">Details</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;