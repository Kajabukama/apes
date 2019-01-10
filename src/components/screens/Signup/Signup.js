import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';


const suid = require('rand-token').suid;
var tokenGenerated = suid(16);
class Signup extends Component {

   state = {
      redirect: false,
      islogged: false,
      isloading: false,
      token: tokenGenerated,
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      password: ''
   }

   componentDidMount(){
      if(localStorage.getItem('user') !== null){
         this.setState({
            islogged: true
         })
      }
   }

   handleChange = (eve) => {
      this.setState({
         [eve.target.name] : eve.target.value
      })
   }

   handleRegister = (eve) => {

      const { token,firstname, lastname, email, mobile, password } = this.state;
      console.log(this.state);
      let user = {token, firstname, lastname, email, mobile, password};
      this.register(user);

      eve.preventDefault();

   }

   register = (user) => {
      axios.post('http://apes.com/user/create', user)
      .then((res) => {
         console.log(res.data)
         this.setState({redirect: true})
      })
      .catch(error => console.log(error))
   }

   render() {
      const { redirect, islogged } = this.state;
      if(redirect){
         return <Redirect to="/user/signin"/>
      }

      if(islogged){
         return <Redirect to="/user/dashboard"/>
      }

      return (
         <div className="container">
            <div className="row">
               <div className="col-md-5 m-auto">
                  <form className="js-validate form-signin p-5" autoComplete="off" onSubmit={ this.handleRegister }>
                     <div className="text-center">
                        <Link to="/" aria-label="Space">
                           <img className="mb-0" src={ logo } alt="Logo" width="160" height="160" />
                        </Link>
                     </div>

                     <div className="text-center">
                        <p>Fill out the form to get started.</p>
                     </div>

                     <div className="js-form-message mb-3">
                        <div className="js-focus-state input-group form">
                           <div className="input-group-prepend form__prepend">
                              <span className="input-group-text form__text">
                                 <span className="fa fa-user form__text-inner"></span>
                              </span>
                           </div>
                           <input type="text" className="form-control form__input" name="firstname" required
                              placeholder="First Name"
                              aria-label="Name"
                              data-msg="Please enter Your first name."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success" onChange={ this.handleChange } />
                        </div>
                     </div>

                     <div className="js-form-message mb-3">
                        <div className="js-focus-state input-group form">
                           <div className="input-group-prepend form__prepend">
                              <span className="input-group-text form__text">
                                 <span className="fa fa-user form__text-inner"></span>
                              </span>
                           </div>
                           <input type="text" className="form-control form__input" name="lastname" required
                              placeholder="Last Name"
                              aria-label="Name"
                              data-msg="Please enter Your last name"
                              data-error-class="u-has-error"
                              data-success-class="u-has-success" onChange={ this.handleChange } />
                        </div>
                     </div>

                     <div className="js-form-message mb-3">
                        <div className="js-focus-state input-group form">
                           <div className="input-group-prepend form__prepend">
                              <span className="input-group-text form__text">
                                 <span className="fa fa-at form__text-inner"></span>
                              </span>
                           </div>
                           <input type="email" className="form-control form__input" name="email" required
                              placeholder="Email address"
                              aria-label="email"
                              data-msg="Please enter a valid email address."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success" onChange={ this.handleChange } />
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
                              data-success-class="u-has-success" onChange={ this.handleChange } />
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
                              data-success-class="u-has-success" onChange={ this.handleChange } />
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
            </div>
         </div>
      );
   }
}

export default Signup;
const logo = require('../../../assets/imgs/apes-logo.svg')