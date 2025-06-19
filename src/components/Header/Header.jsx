import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return(
        <div>
            <header  className="navbar">
                <Link to="/" className="nv-item">vivekanand college</Link>

                <nav className="right-side">
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/aboutpage" className="nav-item">About</Link>
                    <Link to="/coursespage" className="nav-item">Courses</Link>
                    <Link to="/contactpage" className="nav-item">Contact</Link>
                    <Link to="/addmisionpage" className="btn">Apply now</Link>

                </nav>
            </header>
        </div>
    )
}

export default Header