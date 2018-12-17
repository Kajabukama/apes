import React, { Component } from 'react';

class ConfirmForm extends Component {
   state = {
      isLoading: false,
      confirm:''
   }
   render() {
      return (
         <div>
            <form autoComplete="off" method="POST">
               <div className="form-group">
                  <input name="confirm" className="form-control" type="text" placeholder="Enter Verification Code." />
               </div>

               <div className="button-wrapper text-center">
                  <button className="btn btn-primary btn-lg btn-block btn-signin"> Comfirm Account</button>
               </div>
            </form>
         </div>
      );
   }
}

export default ConfirmForm;