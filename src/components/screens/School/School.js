import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';


class AddSchool extends Component {

   state = {
      redirect: false,
      islogged: false,
      isloading: false,
      category: '',
      region: '',
      district: '',
      school: '',
      list_regions: [],
      list_districts: [],
      list_schools: []
   }

   componentDidMount() {

      if (localStorage.getItem('user') !== null && localStorage.getItem('school') !== null) {
         this.setState({
            islogged: true,
            redirect: true
         })
      }

      axios.get('http://apes.com/regions')
         .then(res => {
            this.setState({ list_regions: res.data })
         })
         .catch(error => console.log(error))

   }

   handleChange = (eve) => {
      this.setState({
         [eve.target.name]: eve.target.value
      })
      
   }

   handleRegionChange = (eve) => {
      this.setState({region: eve.target.value});
      axios.get('http://apes.com/districts/region/' + eve.target.value)
         .then(res => {
            console.log(res.data);
            this.setState({ list_districts: res.data })
         })
         .catch(err => console.log(err))
   }

   handleDistrictChange = (eve) => {
      this.setState({district: eve.target.value});
      axios.get('http://apes.com/schools/' + eve.target.value)
         .then(res => {
            console.log(res.data);
            this.setState({ list_schools: res.data })
         })
         .catch(err => console.log(err))
   }

   handleSubmit = (eve) => {

      eve.preventDefault();

      let school = {
         category: this.state.category,
         region: this.state.region,
         district: this.state.district,
         sid: this.state.school,
      }

      if(localStorage.getItem('school') === null){
         localStorage.setItem('school', JSON.stringify(school))
         this.setState({redirect: true})
      }

   }



   render() {
      const { redirect, list_regions, list_districts, list_schools } = this.state;
      if (redirect) {
         return <Redirect to="/user/dashboard" />
      }

      // if (islogged) {
      //    return <Redirect to="/user/dashboard" />
      // }

      return (
         <div className="container">
            <div className="row">
               <div className="col-md-5 m-auto">
                  <form className="js-validate form-signin p-5" autoComplete="off" onSubmit={this.handleSubmit}>
                     <div className="text-center">
                        <Link to="/" aria-label="Space">
                           <img className="mb-0" src={logo} alt="Logo" width="160" height="160" />
                        </Link>
                     </div>

                     <div className="text-center">
                        <p>Select a School you would like to create a Photo entry for.</p>
                     </div>

                     <div className="js-form-message mb-3">
                        <div className="js-focus-state input-group form">
                           <div className="input-group-prepend form__prepend">
                              <span className="input-group-text form__text">
                                 <span className="fa fa-user form__text-inner"></span>
                              </span>
                           </div>
                           <select
                              name="category"
                              id="inputState" value={this.state.category}
                              className="form-control selectpicker"
                              onChange={this.handleChange}>
                              <option value="0">School Category</option>
                              <option value="ss">Secondary School</option>
                              <option value="ps">Primary School</option>
                           </select>
                        </div>
                     </div>

                     <div className="js-form-message mb-3">
                        <div className="js-focus-state input-group form">
                           <div className="input-group-prepend form__prepend">
                              <span className="input-group-text form__text">
                                 <span className="fa fa-user form__text-inner"></span>
                              </span>
                           </div>
                           <select
                              name="region"
                              id="inputState"
                              className="form-control selectpicker" onChange={this.handleRegionChange}>
                              <option value="0">Select Region</option>
                              {list_regions.map((item, key) => {
                                 return <option key={key} value={item.id}> {item.name}</option>
                              })}
                           </select>
                        </div>
                     </div>

                     <div className="js-form-message mb-3">
                        <div className="js-focus-state input-group form">
                           <div className="input-group-prepend form__prepend">
                              <span className="input-group-text form__text">
                                 <span className="fa fa-at form__text-inner"></span>
                              </span>
                           </div>
                           <select
                              name="district"
                              id="inputState"
                              className="form-control selectpicker" onChange={this.handleDistrictChange}>
                              <option value="0">Choose District</option>
                              {list_districts.map((item, key) => {
                                 return <option key={key} value={item.id}> {item.name}</option>
                              })}
                           </select>
                        </div>
                     </div>

                     <div className="js-form-message mb-3">
                        <div className="js-focus-state input-group form">
                           <div className="input-group-prepend form__prepend">
                              <span className="input-group-text form__text">
                                 <span className="fa fa-phone form__text-inner"></span>
                              </span>
                           </div>
                           <select
                              name="school"
                              id="inputState" value={this.state.school }
                              className="form-control selectpicker" onChange={this.handleChange}>
                              <option value="0">Choose District</option>
                              {list_schools.map((item, key) => {
                                 return <option key={key} value={item.regno}> {item.name}</option>
                              })}
                           </select>
                        </div>
                     </div>

                     <div className="mb-3">
                        <button type="submit" className="btn btn-block btn-primary">Add School</button>
                     </div>

                  </form>
               </div>
            </div>
         </div>
      );
   }
}

export default AddSchool;
const logo = require('../../../assets/imgs/apes-logo.svg')