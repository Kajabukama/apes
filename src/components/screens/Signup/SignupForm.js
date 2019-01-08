import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SigninForm extends Component {
   render() {
      return (
         <div>
            <form className="js-validate form-signin p-5" autoComplete="off">
               <div className="text-center">
                  <Link to="/" aria-label="Space">
                     <img className="mb-0" src={ logo } alt="Logo" width="160" height="160" />
                  </Link>
               </div>

               <div className="text-center mb-4">
                  <p>Fill out the form to get started.</p>
               </div>

               <div className="js-form-message mb-3">
                  <div className="js-focus-state input-group form">
                     <div className="input-group-prepend form__prepend">
                        <span className="input-group-text form__text">
                           <span className="fa fa-user form__text-inner"></span>
                        </span>
                     </div>
                     <input type="text" className="form-control form__input" name="email" required
                        placeholder="Your Name"
                        aria-label="Name"
                        data-msg="Please enter a valid email address."
                        data-error-class="u-has-error"
                        data-success-class="u-has-success"  />
                  </div>
               </div>

               <div className="js-form-message mb-3">
                  <div className="js-focus-state input-group form">
                     <div className="input-group-prepend form__prepend">
                        <span className="input-group-text form__text">
                           <span className="fa fa-at form__text-inner"></span>
                        </span>
                     </div>
                     <input type="email" className="form-control form__input" name="password" required
                        placeholder="Email address"
                        aria-label="email"
                        data-msg="Please enter a valid email address."
                        data-error-class="u-has-error"
                        data-success-class="u-has-success" />
                  </div>
               </div>

               <div className="js-form-message mb-3">
                  <div className="js-focus-state input-group form">
                     <div className="input-group-prepend form__prepend">
                        <span className="input-group-text form__text">
                           <span className="fa fa-phone form__text-inner"></span>
                        </span>
                     </div>
                     <input type="text" className="form-control form__input" name="mobile" required
                        placeholder="Mobile Number"
                        aria-label="mobile"
                        data-msg="Please enter a valid mobile number."
                        data-error-class="u-has-error"
                        data-success-class="u-has-success" />
                  </div>
               </div>

               <div className="js-form-message mb-3">
                  <div className="js-focus-state input-group form">
                     <div className="input-group-prepend form__prepend">
                        <span className="input-group-text form__text">
                           <span className="fa fa-lock form__text-inner"></span>
                        </span>
                     </div>
                     <input type="password" className="form-control form__input" name="password" required
                        placeholder="Password"
                        aria-label="Password"
                        data-msg="Your password is invalid. Please try again."
                        data-error-class="u-has-error"
                        data-success-class="u-has-success" />
                  </div>
               </div>

               

               <div className="mb-3">
                  <button type="submit" className="btn btn-block btn-primary">Signup</button>
               </div>

               <div className="text-center mb-3">
                  <p className="text-muted">Do not have an account? <Link to="/user/signin">Signin</Link></p>
               </div>

               <div className="text-center u-divider-wrapper my-3">
                  <span className="u-divider u-divider--xs u-divider--text">OR</span>
               </div>

               <div className="row mx-gutters-2 mb-4">
                  <div className="col-sm-6 mb-2 mb-sm-0">
                     <button type="button" className="btn btn-block btn-sm btn-facebook">
                        <span className="fab fa-facebook-f mr-2"></span>Signup with Facebook</button>
                  </div>
                  <div className="col-sm-6">
                     <button type="button" className="btn btn-block btn-sm btn-twitter">
                        <span className="fab fa-twitter mr-2"></span>Signup with Twitter</button>
                  </div>
               </div>
            </form>
         </div>
      );
   }
}

export default SigninForm;
const logo = require('../../../assets/imgs/apes-logo.svg')