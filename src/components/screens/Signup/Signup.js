import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Signup.css';
import SignupForm from './SignupForm';

class Signup extends Component {

   state = {
      isLoading: true
   }

   handleSubmit = (event) => {
      event.preventDefault();
   }

   render() {
      return (
         <React.Fragment>
         <div className="container push-down-auth">
            <div className="row">
               <div className="col-md-4 offset-md-4">
                  <div className="text-wrapper">
                     <h1 className="title-signup"><span>APES</span> Registration</h1>
                  </div>
                  <SignupForm onSubmit={ this.handleSubmit } />
                  <div className="form-footer">
                     <p>Do you have an Account?<Link to="/user/signin"> Signin Now</Link></p>
                  </div>
               </div>
            </div>
         </div>
         </React.Fragment>

      );
   }
}

export default Signup;