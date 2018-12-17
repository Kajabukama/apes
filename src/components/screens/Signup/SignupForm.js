import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-light-notifications';
import 'react-light-notifications/lib/main.css';
import axios from 'axios';
import { uid } from 'rand-token';
import { Loader } from "react-overlay-loader";

import "react-overlay-loader/styles.css";

class SignupForm extends Component {

   state = {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      accept: '',
      message: '',
      status: '',
      redirect: false,
      isloading: false
   }
   
   notify = (type, message, title, callback) => {
      switch (type) {
         case 'success':
            NotificationManager.success({message:message, title:title, onClick:callback});
            break;
         case 'error':
            NotificationManager.error({ message: message, title: title, onClick: callback });
            break;
         case 'info':
            NotificationManager.info({ message: message, title: title, onClick: callback });
            break;
         case 'warning':
            NotificationManager.warning({ message: message, title: title, onClick: callback });
            break;
         default:
            NotificationManager.info({ message: message, title: title, onClick: callback });
            break;
      }
   }


   handleChange = (event) => {
      this.setState({ 
         [event.target.name]: event.target.value 
      })
   }
   
   toggleCheckbox = () => {
      this.setState({ 
         accept: !this.state.accept,
      });
   }

   checkTerms = () => {
      if(!this.state.accept){
         return this.notify('error','You have not accepted user Terms and Conditions','Terms and Conditions')
      }
   }

   clearState = () => {
      this.setState({
         ...this.state,
         firstname: '',
         lastname: '',
         email: '',
         mobile: '',
         accept: '',
         isloading: false
      });
   }

   postUser = (user) => {
      axios.post('http://apes.com/api/user/create', user)
      .then((res) => {
         console.log(res.data);
         if(res.data.status === 'success'){
            this.setState({redirect: true, isloading: false})
         } else if(res.data.status === 'available'){
            this.setState({ isloading: false })
            this.notify('error',res.data.message,'Account Unavailable')
         } else {
            this.setState({ isloading: false })
            this.notify('error',res.data.message,'System Error')
         }
      });
   }

   userSignup = (event) => {

      event.preventDefault();

      const token = uid(16);
      const user = {
         token: token,
         firstname: this.state.firstname,
         lastname: this.state.lastname,
         email: this.state.email,
         mobile: this.state.mobile,
         accept: (this.state.accept) ? 1 : 0
      }

      console.log(user);
      

      if(!this.state.accept){
         this.checkTerms();
      } else {
         
         if(this.state.email === ''){
            this.notify('warning', 'Email address is required', 'User Error')
            this.setState({ redirect: false, isloading: false });

         } else if (this.state.mobile === '') {
            this.notify("warning", "Mobile number is required", "User Error");
            this.setState({ redirect: false, isloading: false });
         } else {
            this.postUser(user);
         }
      }
   }

   render() {
      const { redirect, isloading } = this.state;
      if (redirect) {
         return <Redirect to='/user/confirm' />;
      }
      return (
         <React.Fragment>
            <NotificationContainer />
            <Loader fullPage loading={ isloading } />
            <div className="form-wrapper">
               <form onSubmit={ this.userSignup } autoComplete="off" method="post">
                  <div className="form-group">
                     <input
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                        name="firstname" onChange={ this.handleChange }
                        value={ this.state.firstname }
                     />
                  </div>
                  <div className="form-group">
                     <input
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        name="lastname" onChange={ this.handleChange }
                        value={ this.state.lastname }
                     />
                  </div>
                  <div className="form-group">
                     <input
                        className="form-control"
                        type="text"
                        placeholder="Email address"
                        name="email" onChange={this.handleChange}
                        value={ this.state.email }
                     />
                  </div>
                  <div className="form-group">
                     <input
                        className="form-control"
                        type="text"
                        placeholder="Mobile Number"
                        name="mobile" onChange={this.handleChange}
                        value={ this.state.mobile }
                     />
                  </div>
                  <div className="form-group">
                     <div className="checkbox">
                        <label>
                           <input 
                              type="checkbox" 
                              name="accept" 
                              checked={this.state.accept} 
                              onChange={this.toggleCheckbox } />
                              <span>You accept User Terms and Conditions.</span>
                        </label>
                     </div>
                  </div>
                  <div className="form-group text-center">
                     <button className="btn btn-primary btn-lg btn-block btn-signin"> Create Account</button>
                  </div>
               </form>
            </div>
         </React.Fragment>
      );
   }
}

export default SignupForm;