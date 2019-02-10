import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import axios from 'axios';
import Navbar from '../../common/Navbar/Navbar';


class StudentList extends Component {

   state = {
      students: []
   }

   componentDidMount() {
      axios.get('http://localhost:8000/api/upload/list-csv/1000')
         .then(response => {
            console.log(response.data)
            this.setState({ students: response.data })
         })
         .catch(error => console.log(error))
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
         <Navbar/>
         <div className="container m-auto align-center">
            <h1 className="mb-5">Payment</h1>
            <button className="btn btn-primary btn-md" onClick={this.generatePDF}> Generete PDF</button>
            <div className="table-container mt-5" id="table-container">
               <table className="table table-responsive-lg">
                  <thead>
                     <tr>
                        <th>id</th>
                        <th>Center No</th>
                        <th>Student Name</th>
                        <th>indexno</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        this.state.students.map((item, index) => {
                           return (
                              <tr key={index}>
                                 <td>{item.id}</td>
                                 <td>{item.sid}</td>
                                 <td>{item.student_name}</td>
                                 <td>{item.indexno}</td>
                              </tr>
                           )
                        })
                     }
                  </tbody>
               </table>
            </div>
         </div>
         </React.Fragment>
      )
   }
}
export default StudentList;