import React, { Component } from "react";
import axios from 'axios';


class PhotoList extends Component {

   state = {
      photo_list: []
   }

   componentDidMount(){
      if(localStorage.getItem('user') === null){
         this.setState({isLogged: false})
      } else {
         const user = JSON.parse(localStorage.getItem('user'));
         axios.get('http://apes.com/uploads/photo/'+ user.id)
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
            <div className="container space-1 space-3--md">
               <div className="row">
                  {/* <SchoolProfile/> */}
                  <div className="col-md-12 mb-12 mb-md-0">
                     
                     <div className="container">
                        <div className="row">
                           {
                              this.state.photo_list.map((photo,index) => {
                                 return (
                                    <div className=" mb-1 ml-1" key={photo.id}>
                                       <img src={ `http://localhost/apes/uploads/${school.sid}/${photo.thumb}`} alt={ photo.id}/>
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

export default PhotoList;
