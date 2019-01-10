import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForgotPassword extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-md-5 m-auto">
                  <form className="js-validate form-signin p-5" autoComplete="off">
                     <div className="text-center">
                        <Link to="/" aria-label="Space">
                           <img className="mb-0" src={logo} alt="Logo" width="160" height="160" />
                        </Link>
                     </div>

                     <div className="text-center mb-4">
                        <p>Enter your email address and an email with instructions will be sent to you.</p>
                     </div>

                     <div className="js-form-message mb-3">
                        <div className="js-focus-state input-group form">
                           <div className="input-group-prepend form__prepend">
                              <span className="input-group-text form__text">
                                 <span className="fa fa-user form__text-inner"></span>
                              </span>
                           </div>
                           <input type="email" className="form-control form__input" name="email" required
                              placeholder="Email address/Mobile Number"
                              aria-label="Email"
                              data-msg="Please enter a valid email address."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success" />
                        </div>
                     </div>
                     <div className="mb-3">
                        <button type="submit" className="btn btn-block btn-danger">Recover Password</button>
                     </div>
                     <div className="text-center mb-3">
                        <p className="text-muted">Have an account? <Link to="/user/signin">Signin Now</Link></p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      );
   }
}

export default ForgotPassword;
const logo = require('../../../assets/imgs/apes-logo.svg')