import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import axios from 'axios';

import Navbar from '../../common/Navbar/Navbar';
import SchoolProfile from '../shared/SchoolProfile';


class ViewStudent extends Component {

   state = {
      isLogged: true,
      student_list: []
   }

   componentDidMount() {

      if (localStorage.getItem('user') === null) {
         this.setState({ isLogged: false })
      } else {
         const user = JSON.parse(localStorage.getItem('user'));
         axios.get('http://localhost:8000/api/upload/list-csv/' + user.id)
            .then(response => {
               console.log(response.data)
               this.setState({ student_list: response.data })
            })
            .catch(error => console.log(error))
      }
   }

   generatePDF = () => {
      window.html2canvas = html2canvas
      const pdf = new jsPDF({
         orientation: 'p',
         unit: 'pt',
         format: 'a4'
      });

      pdf.setProperties({
         title: 'Student List',
         subject: 'A list of student and corresponding center no',
         author: 'Apes',
         keywords: 'report, apes',
         creator: 'Akros Photo Entry System'
      });

      const elementHandlers = {
         '#bypassme': function (element, renderer) {
            return true
         }
      };

      const margins = { top: 60, bottom: 40, left: 65, width: 950 };
      const source = document.querySelector('.table-container');

      console.log(source);
      pdf.setFont("arial", "bold");

      pdf.fromHTML(source, margins.left, margins.top, {
         'width': margins.width,
         'elementHandlers': elementHandlers
      }, function (dispose) {
         pdf.text('THE NATIONAL EXAMINS COUNCIL OF TANZANIA', 80, 30);
         pdf.save('student-list.pdf');
      }, margins);
   }

   render() {
      return (
         <React.Fragment>
            <Navbar />
            <div className="container space-1 space-3--md">
               <div className="row">
                  <SchoolProfile />
                  <div className="col-md-1"></div>
                  <div className="col-md-7 mb-8 mb-md-0">
                     <div style={{ padding: '1rem 0px', marginBottom: '0.5rem' }}>
                        <div className="container">
                           <div className="row">
                              <Link to="/upload/upload-photo"> Upload Photos</Link>
                              <Link to="/upload/generate-pdf"> Generate PDF</Link>
                              <Link to="/upload/view-photos"> View Photos</Link>
                           </div>
                        </div>
                     </div>
                     <div className="table-container">
                        <table className="table table-hover table-striped">
                           <thead>
                              <tr>
                                 <th>id</th>
                                 <th>Indexno</th>
                                 <th>Student Name</th>
                                 <th colSpan="3">Actions</th>
                              </tr>
                           </thead>
                           <tbody>
                              {
                                 this.state.student_list.map((item, key) => {
                                    return (
                                       <tr key={item.id}>
                                          <td>{item.id}</td>
                                          <td>{item.indexno}</td>
                                          <td>{item.student_name}</td>
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
                                       </tr>
                                    )
                                 })
                              }
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
            <div id="stickyBlockEndPoint" />
         </React.Fragment>
      )
   }
}

export default ViewStudent;