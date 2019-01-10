import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../../common/Navbar/Navbar';

class Profile extends Component {

   state = {
      redirect: false,
      islogged: false
   }

   componentWillMount(){

      if(localStorage.getItem('user') !== null){
         this.setState({ islogged: true })
      }
   }

   render(){
      const { islogged } = this.state;

      if(!islogged){
         return <Redirect to="/user/signin"/>
      }

      return(
         <div>
            <Navbar/>
            <div className="container space-top">
               <div className="row">
                  <div className="col-md-12 m-auto">
                     <h3>Profile</h3>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Profile;