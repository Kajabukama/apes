import React, { Component } from "react";
import axios from 'axios';
import './Upload.css';
import Navbar from "../../common/Navbar/Navbar";

class ViewPhoto extends Component {

   state = {
      photo_list: []
   }

   componentDidMount(){
      if(localStorage.getItem('user') === null){
         this.setState({isLogged: false})
      } else {
         const user = JSON.parse(localStorage.getItem('user'));
         axios.get('http://localhost:8000/api/upload/list-photos/'+ user.id)
         .then( response => {
            console.log(response)
            this.setState({photo_list: response.data})
         })
         .catch(error => console.log(error))
      }
   }
   render() {
      const school = JSON.parse(localStorage.getItem('school'));
      return (
         <React.Fragment>
         <Navbar/>
            <div className="container space-1 space-3--md">
               <div className="row">
                  {/* <SchoolProfile/> */}
                  <div className="col-md-12 mb-12 mb-md-0">
                     
                     <div className="container">
                        <div className="row">
                           <div className="col text-center mb-5">
                              <div className="title">THE NATIONAL EXAMINATIONS COUNCIL OF TANZANIA</div>
                              <div className="title">REGISTERED CANDIDATES FOR CERTIFICATE OF PRIMARY</div>
                              <div className="title">EXAMINATION EDUCATION (CSEE) NOVEMBER</div>
                           </div>
                        </div>
                        <div className="row">
                           {
                              this.state.photo_list.map((photo,index) => {
                                 return (
                                    <div className="mb-1 ml-1" key={photo.id}>
                                       <img src={ `http://localhost:8000/uploads/${school.sid}/${photo.thumb}`} alt={ photo.id}/>
                                       <p style={{ fontSize: '11px'}}>{photo.student_name} <br/> { photo.indexno }</p>
                                    </div>
                                 )
                              })
                           }
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="stickyBlockEndPoint" />
         </React.Fragment>
      );
   }
}

export default ViewPhoto;
