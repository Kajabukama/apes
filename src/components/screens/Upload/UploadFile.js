import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import LoadingScreen from 'react-loading-screen';
import './UploadFile.scss';
import Navbar from '../../common/Navbar/Navbar';


class UploadFile extends Component {

   state = {
      selectedFile: null,
      isLoading: false,
      redirect: false,
      school: null,
      user: null,
   }

   componentDidMount(){
     if(localStorage.getItem('user') !== null){
        this.setState({ 
           redirect: false, 
           user: JSON.parse(localStorage.getItem('user')),
           school: JSON.parse(localStorage.getItem('school')) 
         });
     }
   }

   fileSelectedHandler = event => {
      this.setState({
         selectedFile: event.target.files[0]
      })
   }

   fileUploadHandler = () => {

      const { user, school } =  this.state;

      this.setState({
         isLoading: true
      });

      let formData = new FormData();
      formData.append('uid', user.id);
      formData.append('sid', school.sid);
      formData.append('file', this.state.selectedFile, this.state.selectedFile.name);

      axios.post('http://apes.com/uploads/csv-upload', formData)
         .then((response) => {
            console.log(response.data.data.status);
            if (response.data.data.status) {
               this.setState({ isLoading: false, redirect: true })
            }
         });
   }

   render() {

      let user = JSON.parse(localStorage.getItem('user'));
      const { redirect } = this.state;

      console.log(user);

      if(redirect){
         return <Redirect to="/upload/list-students"/>
      }
      return (
         <LoadingScreen
            loading={ this.state.isLoading }
            bgColor='rgba(0, 0, 0,0.8)'
            spinnerColor='#27ae60'
            textColor='#ffffff'
            logoSrc='../../../assets/imgs/apes-logo.svg'
            text='Importing Data ...'
         >
            <Navbar/>
            <div className="container space-top">
               <div className="row">
                  <div className="col-md-6 offset-md-3">
                     <div className="text-wrapper text-center">
                        <h3 className=""> <span>Upload</span> a CSV file </h3>
                        <p className="text-body-home">Please upload, a CSV or Excel file. Make sure you have followed the given instructions on how to create this file.</p>
                     </div>
                     <div className="button-wrapper text-center">
                        <div className="row">
                           <div className="col-md-7">
                              <div className="form-group file-area">
                                 <input 
                                    type="file" 
                                    name="file" id="file" 
                                    required="required" 
                                    onChange={this.fileSelectedHandler} />
                                 <div className="file-dummy">
                                    <div className="success">Great, a file is selected. Upload.</div>
                                    <div className="default">Please select a CSV file</div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-5">
                              <div className="form-group">
                                 <button 
                                    className="btn btn-primary btn-lg btn-upload" 
                                    onClick={this.fileUploadHandler}> Upload File
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </LoadingScreen>

      );
   }
}

export default UploadFile;