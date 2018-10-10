import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
          issuer="https://dev-365012.oktapreview.com/oauth2/default"
          client_id="0oagjm1xyv7QnUBU90h7"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
  <Route exact={true} path='/login' render={() => <Login baseUrl='https://dev-365012.oktapreview.com' />} />
  <Route  path='/signup' component={Signup} />
  <Route  path='/home' component={Home} />
  <Route  path='/community' component={Community} />
  <Route  path='/ask' component={Ask} />
  <Route  path='/profile' component={Profile} />
  <Route  path='*' component={NotFound} />
  </Security>
  </Router>


);


export default Routes;
