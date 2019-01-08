import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {

   render() {
      return (
         <header id="header" className="u-header u-header--modern u-header--bordered u-header--sticky-top-lg">
            <div className="u-header__section">
               <div id="logoAndNav" className="container">
                  <nav className="js-mega-menu navbar navbar-expand-lg u-header__navbar">
                     <div className="u-header__navbar-brand-wrapper">
                        <Link className="navbar-brand u-header__navbar-brand" to="/" aria-label="Space">
                           <img className="u-header__navbar-brand-default" width="100" src={ logo } alt="Logo" />
                           <img className="u-header__navbar-brand-mobile" src={ logo } alt="Logo" />
                        </Link>
                     </div>

                     <button type="button" className="navbar-toggler btn u-hamburger u-header__hamburger"
                        aria-label="Toggle navigation"
                        aria-expanded="false"
                        aria-controls="navBar"
                        data-toggle="collapse"
                        data-target="#navBar">
                        <span className="d-none d-sm-inline-block">Menu</span>
                        <span id="hamburgerTrigger" className="u-hamburger__box ml-3">
                           <span className="u-hamburger__inner"></span>
                        </span>
                     </button>

                     <div id="navBar" className="collapse navbar-collapse u-header__navbar-collapse py-0">
                        <ul className="navbar-nav u-header__navbar-nav ">
                           <li className="nav-item hs-has-sub-menu u-header__nav-item"
                              data-event="hover"
                              data-animation-in="fadeInUp"
                              data-animation-out="fadeOut">
                              <Link id="homeMegaMenu" className="nav-link u-header__nav-link" to="/"
                                 aria-haspopup="true"
                                 aria-expanded="false"
                                 aria-labelledby="homeSubMenu">Dashboard
                              </Link>
                           </li>
                           <li className="nav-item hs-has-sub-menu u-header__nav-item"
                              data-event="hover"
                              data-animation-in="fadeInUp"
                              data-animation-out="fadeOut">
                              <Link id="worksMegaMenu" className="nav-link u-header__nav-link" to="/"
                                 aria-haspopup="true"
                                 aria-expanded="false"
                                 aria-labelledby="worksSubMenu">Schools
                              </Link>
                           </li>

                           <li className="nav-item hs-has-sub-menu u-header__nav-item"
                              data-event="hover"
                              data-animation-in="fadeInUp"
                              data-animation-out="fadeOut">
                              <Link id="docsMegaMenu" className="nav-link u-header__nav-link" to="/"
                                 aria-haspopup="true"
                                 aria-expanded="false"
                                 aria-labelledby="docsSubMenu">Documentation
                              </Link>

                              <ul id="docsSubMenu" className="list-inline hs-sub-menu u-header__sub-menu mb-0" style={{ minWidth: '260px' }}
                                 aria-labelledby="docsMegaMenu">
                                 <li className="dropdown-item u-header__sub-menu-list-item py-0">
                                    <Link className="nav-link d-block u-header__sub-menu-nav-link" to="/">
                                       <div className="media align-items-center">
                                          <img className="max-width-5 mr-3" src={ news } alt="Description" />
                                          <div className="media-body">
                                             <span className="d-block text-dark font-weight-medium">Documentation</span>
                                             <small className="d-block">Apes User guides</small>
                                          </div>
                                       </div>
                                    </Link>
                                 </li>
                                 <li className="dropdown-item u-header__sub-menu-list-item py-0">
                                    <Link className="nav-link d-block u-header__sub-menu-nav-link" to="/">
                                       <div className="media align-items-center">
                                          <img className="max-width-5 mr-3" src={ portifolio } alt="Description" />
                                          <div className="media-body">
                                             <span className="d-block text-dark font-weight-medium">Get Started</span>
                                             <small className="d-block">For Photographers</small>
                                          </div>
                                       </div>
                                    </Link>
                                 </li>
                              </ul>
                           </li>

                           <li className="nav-item u-header__nav-item-btn">
                              <Link className="btn btn-sm btn-primary btn-block" to="/user/signin">
                                 <span className="fa fa-user-circle mr-1"></span>Signin</Link>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
         </header>
      );
   }
}

export default Navbar;
const news = require('../../../assets/svg/components/news-dark-icon.svg')
const portifolio = require('../../../assets/svg/components/portfolio-dark-icon.svg')
const logo = require('../../../assets/imgs/apes-logo.svg');
