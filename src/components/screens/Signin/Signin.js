import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { FormValidation } from "calidation";

import { Link, Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Lock from '@material-ui/icons/LockSharp';
import Mail from '@material-ui/icons/Mail';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styles from '../../../theme';

import config from './Config';

class Signin extends Component {

   state = {
      isloading: false,
      username: '',
      password: '',
      redirect: false,
      isLogged: true,
      remember: false,
      open: false,
      message: ''
   }

   componentDidMount() {
      if (localStorage.getItem('user') === null) {
         this.setState({ isLogged: false })
      }
   }

   handleChange = event => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   handleSubmit = event => {
      const { username, password } = this.state;
      let user = { username, password }
      this.signin(user);
      event.preventDefault();
   }

   onSubmit = ({fields, errors,isValid}) => {
      if(isValid){
         axios.post('http://localhost:8000/api/user/authenticate', fields)
         .then(res => {
            console.log(res.data.user);
            if (res.data.status === true) {
               this.setState({ message: res.data.message });

               localStorage.setItem('user', JSON.stringify(res.data.user))
               this.setState({ redirect: true })
               this.openDialog();

            } else {
               this.setState({ message: res.data.message });
               this.openDialog();
            }
         })
         .catch(error => console.log(error))
      } else {
         console.log('Something went wrong :', errors)
      }
   }

   handleRememberChange = remember => event => {
      this.setState({ [remember]: event.target.checked });
   };

   openDialog = () => {
      this.setState({ open: true });
   };

   closeDialog = (event, reason) => {
      if (reason === 'clickaway') {
         return;
      }
      this.setState({ open: false });
   };

   render() {

      const { classes } = this.props;
      const { redirect } = this.state;

      if(redirect){
         return <Redirect to="/user/dashboard"/>
      }

      return (
         <React.Fragment>
            <Snackbar
               anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
               open={this.state.open}
               autoHideDuration={6000}
               onClose={this.closeDialog}
               ContentProps={{ 'aria-describedby': 'message-id', }}
               message={<span id="message-id">{this.state.message}</span>}
               action={[
                  <IconButton key="close" aria-label="Close" color="inherit" className={classes.close}
                     onClick={this.closeDialog}
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
                           <p>Signin to manage your account.</p>
                        </div>
                        <FormValidation onSubmit={this.onSubmit} config={config} >
                           {
                              ({ fields, erros, submitted }) => (
                                 <Fragment>
                                    <div className="js-form-message ">
                                       <FormControl fullWidth>
                                          <TextField
                                             id="username"
                                             InputProps={{
                                                startAdornment: (
                                                   <InputAdornment position="start">
                                                      <Mail color="secondary" />
                                                   </InputAdornment>
                                                ),
                                             }}
                                             label="Email address" placeholder="Email address/Mobile"
                                             type="text"
                                             name="username"
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
                                             id="password"
                                             InputProps={{
                                                startAdornment: (
                                                   <InputAdornment position="start">
                                                      <Lock color="secondary" />
                                                   </InputAdornment>
                                                ),
                                             }}
                                             label="Password" placeholder="Password"
                                             type="password"
                                             name="password"
                                             autoComplete="off"
                                             margin="normal"
                                             variant="outlined"
                                             onChange={this.handleChange}
                                          />
                                       </FormControl>
                                    </div>

                                    <div className="row">
                                       <div className="col-6">
                                          <FormGroup row>
                                             <FormControlLabel
                                                control={
                                                   <Switch name="remember"
                                                      checked={this.state.remember}
                                                      onChange={this.handleRememberChange('remember')}
                                                      value="remember"
                                                   />
                                                }
                                                label="Remember Me"
                                             />
                                          </FormGroup>
                                       </div>

                                       <div className="col-6 text-right">
                                          <Link className="float-right" to="/user/forgot-password">Forgot Password?</Link>
                                       </div>
                                    </div>

                                    <div className="mb-3">
                                       <button type="submit" className="btn btn-block btn-primary">Signin</button>
                                    </div>
                                 </Fragment>
                              )
                           }
                        </FormValidation>

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
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

Signin.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signin);

const logo = require('../../../assets/imgs/apes-logo.svg')