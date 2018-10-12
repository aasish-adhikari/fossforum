import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import logo from '../../images/fossforum-logo.png';

import './Header.css';


export default withAuth(class Header extends Component {
  constructor(props) {
      super(props);
      this.state = { authenticated: null };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }


  render() {
    if (this.state.authenticated === null) return null;
          const headerContent = this.state.authenticated ? (
            <header>
          <nav className="navbar fixed-top navbar-expand navbar-light justify-content-around bg-light">
            <a className="navbar-brand mr-0" href="/"><img src={logo} width="72" height="30" alt=""/></a>
            <form className="form-inline justify-content-center">
              <input className="form-control w-50 h-50 mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn btn-outline-info my-2 my-sm-0 h-25 ml-2" type="submit"><i className="pe-7s-search"></i></button>
            </form>
            <a href="/ask"><i className="pe-7s-paper-plane pe-2x"></i></a>
          </nav>
          </header>
        ):(
          <div></div>
        );
    return (
      <div>
      {headerContent}
      </div>
    );
  }
});
