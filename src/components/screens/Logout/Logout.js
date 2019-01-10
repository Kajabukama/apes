import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

   state = {
      redirect: false,
   }

   componentWillMount(){
      if(localStorage.getItem('user') !== null){
         localStorage.clear();
         this.setState({redirect: true})
      }
   }

   render(){

      if(this.state.redirect){
         return <Redirect to="/" />
      }
      return(
         <h1>Logout</h1>
      )
   }
}

export default Logout;