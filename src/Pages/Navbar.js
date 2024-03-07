import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../Navbar.css';
import Logo from '../logo.svg';
import { HiMenu } from "react-icons/hi";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  function handleLogout(){
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="My App Logo" />
          </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <HiMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/redux-users">Redux-Toolkit-Users</NavLink>
            </li>
           
            {isLoggedIn && (
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
            )}

            {isLoggedIn ? 
                <li>
                    <Button className="border-0 bg-transparent text-dark p-0" onClick={handleLogout}>Logout</Button>
                </li>
            :
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            }
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;