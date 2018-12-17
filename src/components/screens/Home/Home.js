import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './Home.css';

class Home extends Component {

   render() {
      return (
         <div className="container push-down">
            <div className="row">
               <div className="col-md-6 offset-md-3">
                  <div className="text-wrapper text-center">
                     <h1 className="title-home"><span>Robust</span> Photo Entry System</h1>
                     <p className="text-body-home">Process your Photos for various purposes with easy using &copy; apes, a system designed to process images without demaging their quality. reduce size and crop your images to best fit your needs.</p>
                  </div>
                  <div className="button-wrapper text-center">
                     <Link to="/user/signup" className="btn btn-primary btn-lg btn-home"> Get Started</Link>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Home;