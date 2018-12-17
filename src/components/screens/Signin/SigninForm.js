import React, { Component } from 'react';

class SigninForm extends Component {
   render() {
      return (
         <div>
            <form method>
               <div className="form-group">
                  <input className="form-control" type="text" placeholder="Full name" />
               </div>
               <div className="form-group">
                  <input className="form-control" type="text" placeholder="Email address" />
               </div>
               <div className="form-group">
                  <input className="form-control" type="text" placeholder="Mobile Number" />
               </div>
               <div className="form-group">
                  <input className="form-control" type="text" />
               </div>
            </form>
         </div>
      );
   }
}

export default SigninForm;