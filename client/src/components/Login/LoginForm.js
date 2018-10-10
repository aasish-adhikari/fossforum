import React from 'react';
import { Link } from 'react-router-dom';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';


export default withAuth(class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      error: null,
      username: '',
      password: ''
    }
    this.oktaAuth = new OktaAuth({ url: props.baseUrl });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => this.setState({
        sessionToken: res.sessionToken
      }))
      .catch(err => {
        this.setState({error: err.message});
        console.log(err.statusCode + ' error', err)
      });
  }
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return null;
    }
    const errorMessage = this.state.error ?
<span className="error-message">{this.state.error}</span> :
null;
return (
  <div>
    <div className="container main-wrapper">
      <figure>
        <img className="mx-auto d-block" src="images/fossforum-logo.png" alt="logo" width="200" height="80" />
      </figure>
      <div className="container form-row">
        <form className="col-md-4 mb-3" onSubmit={this.handleSubmit}>
          {errorMessage}
          <input type="text" id="userName" className="form-control border-top-0 border-right-0 border-left-0 rounded-0 bg-light border-dark" placeholder="username" value={this.state.username} required onChange={this.handleUsernameChange}/>
          <input type="password" id="password" className="form-control border-top-0 border-right-0 border-left-0 rounded-0 bg-light border-dark mt-3" placeholder="password" value={this.state.username} required onChange={this.handlePasswordChange} />
          <input type="submit" id="login-btn" className="btn btn-success w-100 mt-3" value="Login"/>
        </form>
        <p class="btn btn-primary"><Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  <footer className="fixed-bottom">
    <p className="text-center">&copy; Foss Forum</p>
  </footer>
</div>
);
}
});
