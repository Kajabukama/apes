import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
   
   render(){
      return(
         <div className="container sticky">
            <div className="row">
               <div className="col-md-6 offset-md-3">
                  <div className="text-wrapper text-center">
                     <ul className="nav justify-content-center footer">
                        <li className="nav-item nav-item-custom">
                           <Link className="nav-link" to="#">About</Link>
                        </li>
                        <li className="nav-item nav-item-custom">
                           <Link className="nav-link" to="#">Schools</Link>
                        </li>
                        <li className="nav-item nav-item-custom">
                           <Link className="nav-link" to="#">Documentation</Link>
                        </li>
                        <li className="nav-item nav-item-custom">
                           <Link className="nav-link" to="#">Terms &amp; Privacy</Link>
                        </li>
                     </ul>
                     <p className="copyright">2018 &copy; Akros Ltd.All Rights Reserved<span>v. 1.0</span></p>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Footer;