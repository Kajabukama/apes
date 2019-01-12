import React, { Component } from 'react';
import axios from "axios";

class SchoolProfile extends Component {


   state ={
      region: {},
      district: {},
      school: {},
      isLogged: true
   }

   componentWillMount(){

      const school = JSON.parse(localStorage.getItem('school'));

      axios.get('http://apes.com/region/' + school.region)
      .then(resp => {
         console.log(resp.data);
         this.setState({region: resp.data});
      })
      .catch(err => console.log(err))

      axios.get('http://apes.com/district/' + school.district)
      .then(response => {
         console.log('district: ', response.data)
         this.setState({district: response.data})
      })
      .catch(error => console.log(error))

      axios.get('http://apes.com/schools/primary/registration/' + school.sid)
      .then(result => {
         console.log('school: ', result.data)
         this.setState({school: result.data})
      })
      .catch(error => console.log(error))
      
   }

   render(){

      const { region, district, school } = this.state;

      
      return(
         <div id="stickyBlockStartPoint" className="col-md-3">
                     <div
                        className="js-sticky-block pl-lg-4"
                        data-sticky-view="md"
                        data-start-point="#stickyBlockStartPoint"
                        data-end-point="#stickyBlockEndPoint"
                        data-offset-top="80"
                        data-offset-bottom="130"
                     >
                        <div className="mb-6">
                           <h5>Student List</h5>
                           <p className="mb-0">
                              This is the list of students you have uploaded from the CSV, choose appropriate actions before uploading images.</p>
                        </div>

                        <hr className="my-5" />

                        <ul className="list-unstyled mb-0">
                           <li className="media mb-1">
                              <div className="min-width-35">
                                 <h2 className="h6">Name</h2>
                              </div>
                              <div className="media-body">
                                 <small className="text-muted">{ school.name }</small>
                              </div>
                           </li>

                           <li className="media mb-1">
                              <div className="min-width-35">
                                 <h4 className="h6">RegNo:</h4>
                              </div>
                              <div className="media-body">
                                 <small className="text-muted">{ school.regno }</small>
                              </div>
                           </li>

                           <li className="media mb-1">
                              <div className="min-width-35">
                                 <h3 className="h6">District</h3>
                              </div>
                              <div className="media-body">
                                 <small className="text-muted">{ district.name }</small>
                              </div>
                           </li>

                           <li className="media">
                              <div className="min-width-35">
                                 <h4 className="h6">Region</h4>
                              </div>
                              <div className="media-body">
                                 <small className="d-block text-muted mb-1">
                                    { region.name }
                                 </small>
                                 <small className="d-block text-muted mb-1">
                                    { region.zone }
                                 </small>
                                 
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
      )
   }
}

export default SchoolProfile;