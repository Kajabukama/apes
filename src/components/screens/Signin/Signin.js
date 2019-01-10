import React, { Component } from 'react';
import axios from 'axios';

import { Link, Redirect } from 'react-router-dom';

import './Signin.css';
class Signin extends Component {

   state = {
      isloading: false,
      username: '',
      password: '',
      redirect: false,
   }

   componentDidMount(){
      if(localStorage.getItem('user') !== null){
         this.setState({redirect: true})
      }
   }

   handleChange = event => {
      this.setState({
         [event.target.name] : event.target.value
      })
   }

   handleSubmit = event =>{
      const { username, password } = this.state;
      let user = { username, password }
      this.signin(user);
      event.preventDefault();
   }

   signin = user => {
      axios.post('http://apes.com/user/authenticate', user)
      .then(res => {
         console.log(res.data.user);
         if(res.data.status === true){
            localStorage.setItem('user', JSON.stringify(res.data.user))
            this.setState({redirect: true})
         }
      })
      .catch(error => console.log(error))
   }


   render() {
      const { redirect } = this.state;
      if(redirect){
         return <Redirect to="/user/dashboard"/>
      }
      return (
         <div className="container">
            <div className="row">
               <div className="col-md-5 m-auto">
                  <form className="js-validate form-signin p-5" autoComplete="off" onSubmit={ this.handleSubmit}>
                     <div className="text-center">
                        <Link to="/" aria-label="Space">
                           <img className="mb-0" src={logo} alt="Logo" width="160" height="160" />
                        </Link>
                     </div>

                     <div className="text-center mb-4">
                        <p>Signin to manage your account.</p>
                     </div>

                     <div className="js-form-message mb-3">
                        <div className="js-focus-state input-group form">
                           <div className="input-group-prepend form__prepend">
                              <span className="input-group-text form__text">
                                 <span className="fa fa-user form__text-inner"></span>
                              </span>
                           </div>
                           <input type="text" className="form-control form__input" name="username" required
                              placeholder="Email address/Mobile Number"
                              aria-label="Email"
                              data-msg="Please enter a valid email address."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success" onChange={this.handleChange} />
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
                              data-success-class="u-has-success" onChange={this.handleChange} />
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
                           <Link className="float-right" to="/user/forgot-password">Forgot Password?</Link>
                        </div>
                     </div>

                     <div className="mb-3">
                        <button type="submit" className="btn btn-block btn-primary">Signin</button>
                     </div>

                     <div className="text-center mb-3">
                        <p className="text-muted">Have an account? <Link to="/user/signup">Signup</Link></p>
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
            </div>

         </div>
      );
   }
}

export default Signin;
const logo = require('../../../assets/imgs/apes-logo.svg')