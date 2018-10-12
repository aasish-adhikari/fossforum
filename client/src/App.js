import React, { Component } from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

// import logo from './images/fossforum-logo.png';
import Header from './components/Header/Header';
import Routes from './routes';
import Footer from './components/Footer/Footer';

// bootstrap
import './styles/libs/bootstrap/bootstrap.min.css';
// icon packs used
import './styles/libs/pe-icon-7-stroke/css/pe-icon-7-stroke.css';
import './styles/libs/pe-icon-7-stroke/css/helper.css';

// font awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

// main css styling
import './styles/main.css';
library.add(faStroopwafel)

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      appName : "Foss Forum"
    }
  }
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://localhost:3030/api',{
      mode: "no-cors"
    });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  render() {
    return (
        <div>
          <Header name={this.state.appName}/>
          <Routes />
          <Footer />
        </div>
        // <Router>
        // <Security
        //         issuer="https://dev-365012.oktapreview.com/oauth2/default"
        //         client_id="0oagjm1xyv7QnUBU90h7"
        //         redirect_uri={window.location.origin + '/implicit/callback'}
        //         onAuthRequired={onAuthRequired}
        //       >
        // <Route exact={true} path='/login' render={() => <Login baseUrl='https://dev-365012.oktapreview.com' />} />
        // <Route  path='/signup' component={Signup} />
        // <Route  path='/' component={Home} />
        // <SecureRoute  path='/community' component={Community} />
        // <SecureRoute  path='/ask' component={Ask} />
        // <SecureRoute  path='/profile' component={Profile} />
        // <Route  path='*' component={NotFound} />
        // <Route path='/implicit/callback' component={ImplicitCallback} />
        // </Security>
        // </Router>
    );
  }
}

export default App;
