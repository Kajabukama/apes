import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';


import './Confirm.css';

class Confirm extends Component {

   state = {
      redirect: false
   }

   componentDidMount(){
      if(localStorage.getItem('user') === null){
         this.setState({redirect: true})
      }
   }
   render() {
      const { redirect } = this.state;
      if(redirect) {
         return <Redirect to="/user/signin"/>
      }
      return (
         <div className="container">
            <div className="row">
               <div className="col-md-5 m-auto">
                  <form className="js-validate form-signin p-5" autoComplete="off" onSubmit={ this.handleRegister }>
                     <div className="text-center">
                        <Link to="/" aria-label="Space">
                           <img className="mb-0" src={ logo } alt="Logo" width="150" height="150" />
                        </Link>
                     </div>

                     <div className="text-center">
                        <p>Fill out the form to get started.</p>
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

                     

                     
                  </form>
               </div>
            </div>
         </div>
      );
   }
}
export default Confirm;
const logo = require('../../../assets/imgs/apes-logo.svg')