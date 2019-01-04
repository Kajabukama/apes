import React, { Component } from 'react';
import Axios from 'axios';
import LoadingScreen from 'react-loading-screen';
import './UploadFile.scss';


class UploadFile extends Component {

   state = {
      selectedFile: null,
      isLoading: false,
   }

   fileSelectedHandler = event => {
      this.setState({
         selectedFile: event.target.files[0]
      })
   }

   fileUploadHandler = () => {

      this.setState({
         isLoading: true
      });

      let fd = new FormData();
      fd.append('uid', 780940);
      fd.append('sid', 'P90076');
      fd.append('file', this.state.selectedFile, this.state.selectedFile.name);

      Axios.post('http://apes.com/api/uploads/csv-upload', fd)
         .then((response) => {
            console.log(response.data.data.status);
            if (response.data.data.status) {
               this.setState({ isLoading: false })
            }
         });
   }


   render() {
      return (
         <LoadingScreen
            loading={ this.state.isLoading }
            bgColor='rgba(0, 0, 0,0.8)'
            spinnerColor='#27ae60'
            textColor='#ffffff'
            logoSrc='../../../assets/imgs/apes-logo.svg'
            text='Importing Data ...'
         >

            <div className="container push-down">
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
                                    onClick={this.fileUploadHandler}>Upload File
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