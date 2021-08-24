import { useState } from "react";
import Button from '../Button/Button';
import './Navbar.css';

const { Link } = require("react-router-dom")

const Navbar = () => {
    const [clicked, setClicked] = useState(true);
    const handleClick = () => setClicked(!clicked);
    const closeMobileMenu = () => setClicked(true);
    const [button, setButton] = useState(false);

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="main-container">
                        <Link to="/" className="navbar-logo my-link" onClick={closeMobileMenu}>
                            MyBaseCamp 2 <i className="fas fa-hiking logo-icon"></i>
                        </Link>
                    </div>

                    <div className="menu-icon" onClick={handleClick}>
                            <i className={ clicked ? "fas fa-bars" : "fas fa-times"}></i>
                        </div>
                    
                 
                        <ul className={ clicked ? "nav-menu" : "nav-menu active"}>
                            <li className="my-list">
                                <Link to="/" className="nav-link my-link" onClick={closeMobileMenu}>Home</Link>
                            </li>
                            <li className="my-list">
                                <Link to="/services" className="nav-link my-link" onClick={closeMobileMenu}>Servies</Link>
                            </li>
                            <li className="my-list">
                                <Link to="/about" className="nav-link my-link" onClick={closeMobileMenu}>About</Link>
                            </li>
                            <li className="my-list">
                                <Button buttonStyle="btn--outline-nb" buttonSize="lg" buttonLength="full" onClick={closeMobileMenu} path="/signup">Sign up</Button>
                            </li>
                            
                        </ul>
                
                    
                        
                </div>
            </nav>
        </>
    )
}

export default Navbar;