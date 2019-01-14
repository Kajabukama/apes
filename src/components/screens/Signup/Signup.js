import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircleSharp';
import Visibility from '@material-ui/icons/VisibilitySharp';
import Mail from '@material-ui/icons/MailSharp';
import PhoneAndroid from '@material-ui/icons/PhoneAndroidSharp';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormGroup from '@material-ui/core/FormGroup';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const suid = require('rand-token').suid;
var tokenGenerated = suid(16);
class Signup extends Component {

   state = {
      redirect: false,
      islogged: true,
      isloading: false,
      token: tokenGenerated,
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      password: ''
   }

   componentDidMount(){
      if(localStorage.getItem('user') === null){
         this.setState({
            islogged: false
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
      const { redirect } = this.state;
      if(redirect){
         return <Redirect to="/user/signin"/>
      }

      return (
         <div className="container">
            <div className="row">
               <div className="col-md-5 m-auto">
                  <form className="js-validate form-signin p-5" autoComplete="off" onSubmit={ this.handleRegister }>
                     <div className="text-center mb-5">
                        <Link to="/" aria-label="Space">
                           <img className="mb-0" src={ logo } alt="Logo" width="160" />
                        </Link>
                     </div>

                     <div className="text-center">
                        <p>Fill out the form to get started.</p>
                     </div>

                     <div className="js-form-message">

                        <FormControl fullWidth>
                           <TextField
                              id="firstname"
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position="start"> 
                                       <AccountCircle color="secondary" /> 
                                    </InputAdornment>
                                 ),
                              }}
                              label="Firstname" placeholder="Your Firstname"
                              type="text"
                              name="firstname"
                              autoComplete="off"
                              margin="normal" 
                              variant="outlined"
                              onChange={ this.handleChange }
                           />
                        </FormControl>
                     </div>

                     <div className="js-form-message">
                        
                        <FormControl fullWidth>
                           <TextField
                              id="lastname"
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position="start"> 
                                       <AccountCircle color="secondary" /> 
                                    </InputAdornment>
                                 ),
                              }}
                              label="Lastname" placeholder="Your Lastname"
                              type="text"
                              name="lastname"
                              autoComplete="off"
                              margin="normal" 
                              variant="outlined"
                              onChange={ this.handleChange }
                           />
                        </FormControl>
                        
                     </div>

                     <div className="js-form-message">
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
                              label="Email address" placeholder="Email Address"
                              type="email"
                              name="email"
                              autoComplete="off"
                              margin="normal" 
                              variant="outlined"
                              onChange={ this.handleChange }
                           />
                        </FormControl>
                     </div>

                     <div className="js-form-message">
                        <FormControl fullWidth>
                           <TextField
                              id="mobile"
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position="start"> 
                                       <PhoneAndroid color="secondary" /> 
                                    </InputAdornment>
                                 ),
                              }}
                              label="Mobile Number" placeholder="Your Mobile Number"
                              type="text"
                              name="mobile"
                              autoComplete="off"
                              margin="normal" 
                              variant="outlined"
                              onChange={ this.handleChange }
                           />
                        </FormControl>
                     </div>

                     <div className="js-form-message mb-5">
                        <FormControl fullWidth>
                           <TextField
                              id="password"
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position="start"> 
                                       <Visibility color="secondary" /> 
                                    </InputAdornment>
                                 ),
                              }}
                              label="Password" placeholder="Your Password"
                              type="password"
                              name="password"
                              autoComplete="off"
                              margin="normal" 
                              variant="outlined"
                              onChange={ this.handleChange }
                           />
                        </FormControl>
                     </div>
                     
                     <div className="mb-3">
                        <button type="submit" className="btn btn-block btn-primary">Signup</button>
                     </div>

                     <div className="text-center mb-3">
                        <p className="text-muted">Do not have an account? <Link to="/user/signin">Signin</Link></p>
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