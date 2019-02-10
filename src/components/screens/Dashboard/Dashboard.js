import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Navbar from '../../common/Navbar/Navbar';

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
         <Navbar/>
            <div className="container space-top">
               <div className="row">
                  <div className="col-md-12 m-auto">
                     <h3>Dashboard</h3>
                     <p>Choose School <Link to="/user/add-school"> View Photo List</Link></p>
                     <p> FiUpload CSVle <Link to="/upload/upload-csv"> View Student List</Link></p>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Dashboard;