import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 

        <nav className="navbar">
            <h1>Sample Form Validation</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Dashboard">Dashboard</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;