import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import styles from '../../../theme';
import Navbar from '../../common/Navbar/Navbar';

const API_URL = "http://localhost:8000/api";


class Configure extends Component {

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
      list_schools: [],
      labelWidth: 0,
   }

   componentDidMount() {

      
      this.setState({
         labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
      });

      axios.get(API_URL + '/region')
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
      this.setState({ region: eve.target.value });
      axios.get(API_URL + '/district/region/' + eve.target.value)
         .then(res => {
            console.log(res.data);
            this.setState({ list_districts: res.data })
         })
         .catch(err => console.log(err))
   }

   handleDistrictChange = (eve) => {
      this.setState({ district: eve.target.value });
      axios.get(API_URL +'/school/district/' + eve.target.value)
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
      console.log(this.state)
      localStorage.setItem('school', JSON.stringify(school))
      this.setState({ redirect: true })

   }



   render() {
      const { redirect, list_regions, list_districts, list_schools } = this.state;
      if (redirect) {
         return <Redirect to="/user/dashboard" />
      }

      // if (islogged) {
      //    return <Redirect to="/user/dashboard" />
      // }
      // const { classes } = this.props;
      
      return (
         <React.Fragment>
         <Navbar/>
         <div className="container space-top">
            <div className="row">
               <div className="col-md-5 m-auto">
                  <form className="js-validate form-signin p-5" autoComplete="off" onSubmit={this.handleSubmit}>
                     <div className="text-center">
                        <p>Select a School you would like to create a Photo entry for.</p>
                     </div>
                     <div className="js-form-message mb-3">
                        <FormControl variant="outlined" fullWidth>
                           <InputLabel ref={ref => { this.InputLabelRef = ref; }}
                              htmlFor="category"> School Type </InputLabel>
                           <Select
                              value={ this.state.category }
                              onChange={ this.handleChange }
                              input={ <OutlinedInput labelWidth={this.state.labelWidth}
                                 name="category" id="category" />
                              }>
                              <MenuItem value=""><em>None</em> </MenuItem>
                              <MenuItem value="ps">Primary School</MenuItem>
                              <MenuItem value="ss">Secondary School</MenuItem>
                           </Select>
                        </FormControl>
                     </div>
                     <div className="js-form-message mb-3">
                        <FormControl variant="outlined" fullWidth>
                           <InputLabel ref={ref => { this.InputLabelRef = ref; }}
                              htmlFor="category"> Select Region </InputLabel>
                           <Select
                              value={ this.state.region }
                              onChange={ this.handleRegionChange }
                              input={<OutlinedInput labelWidth={ this.state.labelWidth }
                                 name="region" id="region" />
                              }
                           >
                              {list_regions.map((item, key) => {
                                 return <MenuItem key={key} value={item.id}> {item.name}</MenuItem>
                              })}
                           </Select>
                        </FormControl>
                     </div>
                     <div className="js-form-message mb-3">
                        <FormControl variant="outlined" fullWidth>
                           <InputLabel ref={ref => { this.InputLabelRef = ref; }}
                              htmlFor="district"> Select District </InputLabel>
                           <Select
                              value={this.state.district}
                              onChange={this.handleDistrictChange}
                              input={<OutlinedInput labelWidth={this.state.labelWidth}
                                 name="district" id="district" />
                              }
                           >
                              <MenuItem value=""><em>None</em> </MenuItem>
                              {list_districts.map((item, key) => {
                                 return <MenuItem key={key} value={item.id}> {item.name}</MenuItem>
                              })}
                           </Select>
                        </FormControl>
                     </div>
                     <div className="js-form-message mb-3">

                        <FormControl variant="outlined" fullWidth>
                           <InputLabel ref={ref => { this.InputLabelRef = ref; }}
                              htmlFor="school"> Select School </InputLabel>
                           <Select
                              value={this.state.school}
                              onChange={this.handleChange}
                              input={<OutlinedInput labelWidth={this.state.labelWidth}
                                 name="school" id="school" />
                              }
                           >
                              <MenuItem value=""><em>None</em> </MenuItem>
                              {list_schools.map((item, key) => {
                                 return <MenuItem key={key} value={item.regno}> {item.name}</MenuItem>
                              })}
                           </Select>
                        </FormControl>
                     </div>
                     <div className="mb-3">
                        <button type="submit" className="btn btn-block btn-primary">Add School</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         </React.Fragment>
      );
   }
}

Configure.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Configure);