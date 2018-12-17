import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './404.css';

class NotFound extends Component {
   render() {
      return (
         <div className="container push-down">
            <div className="row">
               <div className="col-md-6 offset-md-3">
                  <div className="text-wrapper text-center">
                     <h1 className="title-error">404</h1>
                     <h3>Not Found</h3>
                     <p className="text-body-error">The page you are looking for is either removed or something happened, please comeback later!</p>
                  </div>
                  <div className="button-wrapper text-center">
                     <Link to="/" className="btn btn-primary btn-lg btn-error"> Go Back</Link>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default NotFound;