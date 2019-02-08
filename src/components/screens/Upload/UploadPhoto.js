import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import LoadingScreen from 'react-loading-screen';
import './UploadFile.scss';
import Navbar from '../../common/Navbar/Navbar';


class UploadPhoto extends Component {

   state = {
      files: [],
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
         files: event.target.files
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

      for( var i = 0; i < this.state.files.length; i++ ){
         let file = this.state.files[i];
         formData.append('files[' + i + ']', file);
       }

      Axios.post('http://localhost:8000/api/upload/photo-upload', formData)
         .then((response) => {
            console.log(response);
            if (response.status) {
               this.setState({ isLoading: false, redirect: true })
            }
         });
   }


   render() {

      let user = JSON.parse(localStorage.getItem('user'));
      const { redirect } = this.state;

      console.log(user);

      if(redirect){
         return <Redirect to="/upload/list-photos"/>
      }
      return (
         <LoadingScreen
            loading={ this.state.isLoading }
            bgColor='rgba(0, 0, 0,0.8)'
            spinnerColor='#27ae60'
            textColor='#ffffff'
            logoSrc='../../../assets/imgs/apes-logo.svg'
            text='Please wait, uploading images ...'
         >
            <Navbar/>
            <div className="container space-top">
               <div className="row">
                  <div className="col-md-6 offset-md-3">
                     <div className="text-wrapper text-center">
                        <h3 className=""> <span>Upload</span> Photos </h3>
                        <p className="text-body-home">Select a list of photos from your prepared Photos</p>
                     </div>
                     <div className="button-wrapper text-center">
                        <div className="row">
                           <div className="col-md-7">
                              <div className="form-group file-area">
                                 <input 
                                    type="file" multiple
                                    name="files[]" id="file" 
                                    required="required" 
                                    onChange={ this.fileSelectedHandler } />
                                 <div className="file-dummy">
                                    <div className="success">Photos selected. Upload.</div>
                                    <div className="default">Select Multiple Photos</div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-5">
                              <div className="form-group">
                                 <button 
                                    className="btn btn-info btn-lg btn-upload" 
                                    onClick={this.fileUploadHandler}> Upload Photos
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

export default UploadPhoto;