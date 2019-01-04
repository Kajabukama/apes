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
                  <h1 className="h3 mb-0">Please sign in</h1>
                  <p>Signin to manage your account.</p>
               </div>

               <div className="js-form-message mb-3">
                  <div className="js-focus-state input-group form">
                     <div className="input-group-prepend form__prepend">
                        <span className="input-group-text form__text">
                           <span className="fa fa-user form__text-inner"></span>
                        </span>
                     </div>
                     <input type="email" className="form-control form__input" name="email" required
                        placeholder="Email"
                        aria-label="Email"
                        data-msg="Please enter a valid email address."
                        data-error-class="u-has-error"
                        data-success-class="u-has-success"  />
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

               <div className="row mb-3">
                  <div className="col-6">
                     <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
                        <input type="checkbox" className="custom-control-input" id="rememberMeCheckbox" />
                        <label className="custom-control-label" htmlFor="rememberMeCheckbox">Remember Me</label>
                     </div>
                  </div>

                  <div className="col-6 text-right">
                     <Link className="float-right" to="/">Forgot Password?</Link>
                  </div>
               </div>

               <div className="mb-3">
                  <button type="submit" className="btn btn-block btn-primary">Signin</button>
               </div>

               <div className="text-center mb-3">
                  <p className="text-muted">Do not have an account? <Link to="/">Signup</Link></p>
               </div>

               <div className="text-center u-divider-wrapper my-3">
                  <span className="u-divider u-divider--xs u-divider--text">OR</span>
               </div>

               <div className="row mx-gutters-2 mb-4">
                  <div className="col-sm-6 mb-2 mb-sm-0">
                     <button type="button" className="btn btn-block btn-sm btn-facebook">
                        <span className="fab fa-facebook-f mr-2"></span>Signin with Facebook</button>
                  </div>
                  <div className="col-sm-6">
                     <button type="button" className="btn btn-block btn-sm btn-twitter">
                        <span className="fab fa-twitter mr-2"></span>Signin with Twitter</button>
                  </div>
               </div>
            </form>
         </div>
      );
   }
}

export default SigninForm;
const logo = require('../../../assets/imgs/apes-logo.svg')