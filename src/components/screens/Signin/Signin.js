import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Signin.css';

class Signin extends Component {

   render() {
      return (
         <div className="container push-down-auth">
            <div className="row">
               <div className="col-md-4 offset-md-4">
                  <div className="text-wrapper">
                     <h1 className="title-signin"><span>APES</span> Signin</h1>
                  </div>
                  <div className="form-wrapper">
                     <form autoComplete="off" method="POST">
                        <div className="form-group">
                           <input className="form-control" type="text" placeholder="Email address"/>
                        </div>
                        <div className="form-group">
                           <input className="form-control" type="text" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                           <div className="checkbox">
                              <label>
                                 <input
                                    type="checkbox"
                                    name="accept" />
                                 <span>Remember Me.</span>
                              </label>
                           </div>
                        </div>
                        <div className="button-wrapper text-center">
                           <button className="btn btn-primary btn-lg btn-block btn-signin"> Sign In</button>
                        </div>
                     </form>
                  </div>
                  <div className="form-footer">
                     <p>Don't have an Account?<Link to="/user/signup"> Signup Now</Link></p>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Signin;