import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class Dashboard extends Component {

   state = {
      redirect: false
   }

   componentDidMount(){

      if(localStorage.getItem('user') === null){
         this.setState({redirect: false})
      }
   }

   render(){
      const { redirect } = this.state;
      if(redirect){
         return <Redirect to="/user/signin"/>
      }
      return(
         <div>
            <div className="container space-top">
               <div className="row">
                  <div className="col-md-12 m-auto">
                     <h3>Dashboard</h3>
                     <p>Choose School <Link to="/user/add-school"> Add School</Link></p>
                     <p> FiUpload CSVle <Link to="/upload/upload-csv"> Upload Student Names</Link></p>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Dashboard;