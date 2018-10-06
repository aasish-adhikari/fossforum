import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Community from './components/Community/Community';
import Ask from './components/Ask/Ask';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';

const Routes = () =>(
  <BrowserRouter>
  <Switch>
  <Route exact path='/' component={Login} />
  <Route exact path='/signup' component={Signup} />
  <Route  path='/home' component={Home} />
  <Route  path='/community' component={Community} />
  <Route  path='/ask' component={Ask} />
  <Route  path='/profile' component={Profile} />

  <Route  path='*' component={NotFound} />


  </Switch>
  </BrowserRouter>


);


export default Routes;
