import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Home from './components/screens/Home/Home';
import Home from './components/screens/Home/Home';
import NotFound from './components/screens/Error/404';
import Signin from "./components/screens/Signin/Signin";
import Signup from './components/screens/Signup/Signup';
import Confirm from './components/screens/Confirm/Confirm';
import UploadFile from './components/screens/Upload/UploadFile';
import ForgotPassword from './components/screens/Forgot/ForgotPassword';
import Dashboard from './components/screens/Dashboard/Dashboard';
import Settings from './components/screens/Settings/Settings';
import Profile from './components/screens/Profile/Profile';
import Logout from './components/screens/Logout/Logout';
import UploadPhoto from './components/screens/Upload/UploadPhoto';
import ViewPhoto from './components/screens/Upload/ViewPhoto';
import ViewStudent from './components/screens/Upload/ViewStudent';
import StudentList from './components/screens/Documents/StudentList';
import Configure from './components/screens/Settings/Configure';

const Routes = () => {
   return(
      <Switch>
         <Route exact path='/' component={ Home } />
         <Route exact path='/user/signin' component={ Signin } />
         <Route exact path='/user/configure-account' component={ Configure } />
         <Route exact path='/user/signup' component={ Signup } />
         <Route exact path='/user/logout' component={ Logout } />
         <Route exact path='/user/confirm' component={ Confirm } />
         <Route exact path='/user/forgot-password' component={ ForgotPassword } />

         <Route exact path='/user/dashboard' component={ Dashboard } />
         <Route exact path='/user/settings' component={ Settings } />
         <Route exact path='/user/profile' component={ Profile } />

         <Route exact path='/upload/upload-csv' component={ UploadFile } />
         <Route exact path='/upload/upload-photo' component={ UploadPhoto } />
         <Route exact path='/upload/view-photos' component={ ViewPhoto } />
         <Route exact path='/upload/view-students' component={ ViewStudent } />
         <Route exact path='/upload/generate-pdf' component={ StudentList } />
         <Route exact path='*' component={ NotFound } />
      </Switch>
   );
}

export default Routes;