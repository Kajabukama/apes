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
            <div className="container">
               <div className="col-md-5 m-auto">
                  <SignupForm onSubmit={this.handleSubmit} />
               </div>
            </div>
         </React.Fragment>

      );
   }
}

export default Signup;