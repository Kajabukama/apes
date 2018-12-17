import React, { Component } from 'react';


import './Confirm.css';
import ConfirmForm from './ConfirmForm';

class Confirm extends Component {

   render() {
      return (
         <div className="container push-down-auth">
            <div className="row">
               <div className="col-md-4 offset-md-4">
                  <div className="text-wrapper">
                     <h1 className="title-confirm"><span>APES</span> Comfirm Account</h1>
                     <p style={ styles.info }>Provide the code sent to your Mobile Phone from APES to unlock your account</p>
                  </div>
                  <div className="form-wrapper">
                     <ConfirmForm/>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
const styles = {
   info:{
      paddingLeft: 0
   }
}
export default Confirm;