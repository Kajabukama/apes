import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Home from './components/screens/Home/Home';
import NotFound from './components/screens/Error/404';
import Signin from "./components/screens/Signin/Signin";
import Signup from './components/screens/Signup/Signup';
import Confirm from './components/screens/Confirm/Confirm';
import UploadFile from './components/screens/Upload/UploadFile';

const Routes = () => {
   return(
      <Switch>
         <Route exact path='/' component={ UploadFile } />
         <Route exact path='/user/signin' component={ Signin } />
         <Route exact path='/user/signup' component={ Signup } />
         <Route exact path='/user/confirm' component={ Confirm } />
         <Route exact path='*' component={ NotFound } />
      </Switch>
   );
}

export default Routes;