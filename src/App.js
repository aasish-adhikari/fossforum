import React, { Component } from 'react';
import logo from './logo.svg';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  render() {
    return (
      <main>
        <div id="header">
          <Header name={this.state.appName}/>
          <Routes />
          <Footer />
        </div>
      </main>
    );
  }
}

export default App;
