// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Home</Link>
                <Link to="/register" className="navbar-link">Register</Link>
                <Link to="/students" className="navbar-link">Students</Link>
            </div>
        </nav>
    );
};

export default Navbar;
