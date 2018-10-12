import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import './Footer.css';


export default withAuth(class Footer extends Component {
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

          const footerContent = this.state.authenticated ? (
            <nav className="navbar p-0 navbar-expand fixed-bottom navbar-light bg-light">
            <ul className="nav list-unstyled w-100 m-0 d-flex flex-row flex-nowrap justify-content-around">
              <li className="nav-item active">
                <a className="nav-link" id="homeNav" href="/"><i className="pe-7s-home pe-2x pe-va pe-fw"></i><span className="sr-only">(current)</span><p className="text-muted fsize-11">Home</p></a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/community"><i className="pe-7s-network pe-2x pe-va pe-fw"></i><p className="text-muted fsize-11">Groups</p></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id= "askNav" href="/ask"><i className="pe-7s-pen pe-2x pe-va pe-fw"></i><p className="text-muted fsize-11">Ask</p></a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-center" href="/"><i className="pe-7s-bell pe-2x pe-va pe-fw"></i><p className="text-muted fsize-11">Notifications</p></a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/profile"><i className="pe-7s-user pe-2x pe-va pe-fw"></i><p className="text-muted fsize-11">Account</p></a>
              </li>
            </ul>
          </nav>
        ):(
          <div></div>
        );
    return (
      <div>
      {footerContent}
      </div>
    );
  }
});
