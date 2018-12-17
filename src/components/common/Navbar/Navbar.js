import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import Logo from './Logo';

class Navbar extends Component {

   render() {
      return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="container">
                  <Logo />
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                        <li className="nav-item  call-action">
                           <NavLink activeClassName="active" className="nav-link" to="/user/signup">Register Now</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink activeClassName="active" className="nav-link" to="/user/signin">Sign In</NavLink>
                        </li>
                     <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown">English <i className="material-icons icons">language</i></NavLink>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <NavLink activeClassName="active" className="dropdown-item" to="#">English</NavLink>
                           <NavLink activeClassName="active" className="dropdown-item" to="#">Kiswahili</NavLink>
                        </div>
                     </li>
                     </ul>
                  </div>
               </div>
            </nav>
      );
   }
}

export default Navbar;
