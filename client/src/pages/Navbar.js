import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="menu-icon" onClick={handleMobileMenuToggle}>
                    <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                </div>
                <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/students" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Students</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
