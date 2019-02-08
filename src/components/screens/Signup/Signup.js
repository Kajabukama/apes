import React, { Component, Fragment } from 'react';
import { FormValidation } from "calidation";
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

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import config from './Config';
import styles from '../../../theme';

 
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
      password: '',
      message: ''
   }

   componentDidMount() {
      if (localStorage.getItem('user') === null) {
         this.setState({
            islogged: false
         })
      }
   }

   handleChange = (eve) => {
      this.setState({
         [eve.target.name]: eve.target.value
      })
   }

   handleRegister = (eve) => {

      const { token, firstname, lastname, email, mobile, password } = this.state;
      console.log(this.state);
      let user = { token, firstname, lastname, email, mobile, password };
      this.register(user);

      eve.preventDefault();

   }


   onSubmit = ({ fields, errors, isValid }) => {
      if (isValid) {
         console.log('Everything is good:', fields);
         console.log(fields.email)
         let user = {
            token: tokenGenerated,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            mobile: this.state.mobile,
            password: this.state.password,
         }
         axios.post('http://localhost:8000/api/user/create', user)
            .then((response) => {
               console.log(response);
               if(response.data.status === 'available'){
                  this.setState({
                     message: response.data.message,
                  })
                  this.openDialog();
               } else {
                  this.setState({
                     redirect: true
                  })
               }
            })
            .catch((err) => console.log(err))
      } else {
         console.log('Something is wrong:', errors);
         if(errors){
            this.setState({message: 'You must provide an email address'})
         }
         this.openDialog();
         console.log(this.state);
      }
   };


   openDialog = () => { this.setState({ open: true }); };
  
   closeDialog = (event, reason) => {
      if (reason === 'clickaway') { return; }
      this.setState({ open: false });
   };

   render() {


      const { redirect } = this.state;
      const { classes } = this.props;
      
      if (redirect) {
         return <Redirect to="/user/signin" />
      }

      return (
         <React.Fragment>
            <Snackbar
               anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
               open={this.state.open}
               autoHideDuration={6000}
               onClose={this.closeDialog}
               ContentProps={{ 'aria-describedby': 'message-id', }}
               message={<span id="message-id">{ this.state.message }</span>}
               action={[
                  <IconButton  key="close" aria-label="Close" color="inherit" className={ classes.close }
                     onClick={ this.closeDialog }
                  >
                  <CloseIcon />
                  </IconButton>,
               ]}
            />
         <div className="container">
            <div className="row">
               <div className="col-md-5 m-auto">
                  <div className="js-validate form-signin p-5">
                     <div className="text-center mb-5">
                        <Link to="/" aria-label="Space">
                           <img className="mb-0" src={logo} alt="Logo" width="160" />
                        </Link>
                     </div>
                     <div className="text-center">
                        <p>Fill out the form to get started.</p>
                     </div>
                     <FormValidation onSubmit={ this.onSubmit } config={ config }>
                        {
                           ({ fields, errors, submitted }) => (
                              <Fragment>
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
                                          onChange={this.handleChange}
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
                                          onChange={this.handleChange}
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
                                          onChange={this.handleChange}
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
                                          onChange={this.handleChange}
                                       />
                                    </FormControl>
                                 </div>
                                 <div className="mb-3">
                                    <button type="submit" className="btn btn-block btn-primary">Signup</button>
                                 </div>
                              </Fragment>
                           )
                        }
                     </FormValidation>
                     <div className="text-center mb-3">
                        <p className="text-muted">Do not have an account? <Link to="/user/signin">Signin</Link></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </React.Fragment>
      );
   }
}
Signup.propTypes = {
   classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(Signup);

const logo = require('../../../assets/imgs/apes-logo.svg')