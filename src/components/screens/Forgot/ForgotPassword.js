import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Mail from '@material-ui/icons/Mail';
import InputAdornment from '@material-ui/core/InputAdornment';


class ForgotPassword extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-md-5 m-auto">
                  <form className="js-validate form-signin p-5" autoComplete="off">
                     <div className="text-center mb-5">
                        <Link to="/" aria-label="Space">
                           <img className="mb-0" src={logo} alt="Logo" width="160" />
                        </Link>
                     </div>

                     <div className="text-center mb-4">
                        <p>Enter your email address and an email with instructions will be sent to you.</p>
                     </div>

                     <div className="js-form-message mb-3">
                        <FormControl fullWidth>
                           <TextField
                              id="email"
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position="start"> 
                                       <Mail color="secondary" />
                                    </InputAdornment>
                                 ),
                              }}
                              label="Email address" placeholder="Email address/Mobile"
                              type="email"
                              name="email"
                              autoComplete="off"
                              margin="normal" 
                              variant="outlined"
                              onChange={ this.handleChange }
                           />
                        </FormControl>
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