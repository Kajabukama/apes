import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../../common/Navbar/Navbar';
import SchoolProfile from '../shared/SchoolProfile';


class StudentList extends Component {

   state = {
      isLogged: true,
      student_list: []
   }

   componentDidMount(){

      if(localStorage.getItem('user') === null){
         this.setState({isLogged: false})
      } else {
         const user = JSON.parse(localStorage.getItem('user'));
         axios.get('http://localhost:8000/api/upload/list-csv/'+ user.id)
         .then( response => {
            console.log(response)
            this.setState({student_list: response.data})
         })
         .catch(error => console.log(error))
      }
   }


   render(){

      return(
         <React.Fragment>
            <Navbar />
            <div className="container space-1 space-3--md">
               <div className="row">
                  <SchoolProfile/>
                  <div className="col-md-1"></div>
                  <div className="col-md-7 mb-8 mb-md-0">
                     <div style={{ padding: '1rem 0px', marginBottom: '0.5rem'}}>
                        <div className="container">
                           <div className="row">
                              <div className="col-md-1">
                                 <Link className="u-icon u-icon--dark rounded-circle" to="/upload/upload-photo">
                                    <span className="fa fa-camera u-icon__inner"></span>
                                 </Link>
                              </div>
                              <div className="col-md-1">
                                 <Link className="u-icon u-icon--primary rounded-circle" to="/upload/upload-csv">
                                    <span className="fa fa-file-upload u-icon__inner"></span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <table className="table table-hover table-striped">
                        <thead>
                           <tr>
                              <th>id</th>
                              <th>Indexno</th>
                              <th>Student Name</th>
                              <th>Thumb</th>
                              <th colSpan="3">Actions</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              this.state.student_list.map((item,key) => {
                                 return (
                                 <tr key={item.id }>
                                    <td>{ item.id }</td>
                                    <td>{ item.indexno }</td>
                                    <td>{ item.student_name }</td>
                                    <td>{ item.thumb }</td>
                                    <td>
                                       <Link className="u-icon u-icon--sm rounded-circle u-icon--primary" to="#">
                                          <span className="fa fa-pencil-alt u-icon__inner"></span>
                                       </Link>
                                    </td>
                                    <td>
                                       <Link className="u-icon u-icon--sm rounded-circle u-icon--danger" to="#">
                                          <span className="fa fa-trash u-icon__inner"></span>
                                       </Link>
                                    </td>
                                 </tr>)
                              })
                           }
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
            <div id="stickyBlockEndPoint" />
         </React.Fragment>
      )
   }
}

export default StudentList;