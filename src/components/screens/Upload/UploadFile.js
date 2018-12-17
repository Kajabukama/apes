import React, { Component } from 'react';
import './UploadFile.css';
import axios from 'axios';

class UploadFile extends Component {

   state = {
      file: '',
      loaded: false
   }

   handleChange = (eve, file) => {
      // this.setState({
         [eve.target.name] = eve.target.value
      // })
   }

   handleUpload = (eve) => {
      eve.preventDefault();
      let formData = new FormData();
      formData.append("uid", 9098777);
      formData.append("sid", "P67074");
      formData.append("file", this.state.file);

      console.log(formData);

      axios.post('http://apes.com/api/uploads/csv-upload', formData)
      .then((res) => console.log(res));
   }

   render() {
      return (
         <div className="container push-down">
            <div className="row">
               <div className="col-md-6 offset-md-3">
                  <div className="text-wrapper text-center">
                     <h3 className=""><span>Upload</span> a CSV file</h3>
                     <p className="text-body-home">Please upload, a CSV or Excel file. Make sure you have followed the given instructions on how to create this file.</p>
                  </div>
                  <div className="button-wrapper text-center">
                     <form method="POST" encType="multipart/form-data" onSubmit={this.handleUpload}>
                        <div className="form-group">
                           <input
                              className="form-control-file"
                              type="file" name="file"
                              placeholder="Select a File"
                              onChange={this.handleChange}
                           />
                        </div>
                        <div className="form-group">
                           <input type="submit" className="btn btn-primary btn-lg btn-home" value="Upload File" />

                        </div>
                     </form>

                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default UploadFile;