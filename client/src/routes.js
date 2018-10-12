import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Community from './components/Community/Community';
import Ask from './components/Ask/Ask';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';

function onAuthRequired({ history }) {
  history.push('/login');
}


const Routes = () =>(
  <Router>
  <Security
          issuer="https://dev-120528.oktapreview.com/oauth2/default"
          client_id="0oaglojce4H3GOFmI0h7"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
  <Route exact={true} path='/login' render={() => <Login baseUrl='https://dev-120528.oktapreview.com' />} />
  <Route exact={true}  path='/signup' component={Signup} />
  <Route exact={true}  path='/' component={Home} />
  <SecureRoute exact={true} path='/community' component={Community} />
  <SecureRoute exact={true}  path='/ask' component={Ask} />
  <SecureRoute exact={true} path='/profile' component={Profile} />
  
  <Route path='/implicit/callback' component={ImplicitCallback} />
  </Security>
  </Router>


);


export default Routes;
