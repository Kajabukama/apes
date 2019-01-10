import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import axios from 'axios';
import Navbar from '../../common/Navbar/Navbar';


class StudentList extends Component {
   render(){
      return(
         <React.Fragment>
            <Navbar/>
         <div className="container space-top">
            <div className="row">
               <div className="col-md-4">
                  
               </div>
               <div className="col-md-8">
                  <h2>Student List </h2>
               </div>
            </div>
         </div>
         </React.Fragment>
      )
   }
}

export default StudentList;