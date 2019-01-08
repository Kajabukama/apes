import React, { Component } from 'react';

import './Signin.css';
import SigninForm from './SigninForm';

class Signin extends Component {

   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-md-5 m-auto">
                  
               <SigninForm/>
                  
               </div>
            </div>
         </div>
      );
   }
}

export default Signin;