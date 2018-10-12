import React, { Component } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { Redirect } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import logo from "../../images/fossforum-logo.png";
import config from '../../app.config';
import './Signup.css';

export default withAuth(class Signup extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      sessionToken: null
    };
    this.oktaAuth = new OktaAuth({ url: config.url });
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  async checkAuthentication() {
    const sessionToken = await this.props.auth.getIdToken();
    if (sessionToken) {
      this.setState({ sessionToken });
    }
  }
  componentDidUpdate() {
    this.checkAuthentication();
  }
  handleFirstNameChange(e){
    this.setState({firstName:e.target.value});
  }
  handleLastNameChange(e){
    this.setState({lastName:e.target.value});
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:3030/api/users/', {
      method: 'POST',
       mode: "no-cors",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    }).then(user => {
      this.oktaAuth.signIn({
        username: this.state.email,
        password: this.state.password
      })
      .then(res => this.setState({
        sessionToken: res.sessionToken
      }));
    })
    .catch(err => console.log);
    <Redirect to="/"/>;
  }
  render(){
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return null;
    }
    const errorMessage = this.state.error ?
<span className="error-message">{this.state.error}</span> :
null;

    return(
      <div className="container main-wrapper">
        <figure>
          <img className="mx-auto d-block" src={logo} alt="logo" width="200" height="80" />
        </figure>
      <form onSubmit={this.handleSubmit}>
        {errorMessage}
        <input type="text" id="userName" className="form-control border-top-0 border-right-0 border-left-0 rounded-0 bg-light border-dark" placeholder="First Name" value={this.state.firstName} required onChange={this.handleFirstNameChange}/>
        <input type="text" id="userName" className="form-control border-top-0 border-right-0 border-left-0 rounded-0 bg-light border-dark mt-3" placeholder="Last Name" value={this.state.lastName} required onChange={this.handleLastNameChange}/>
        <input type="text" id="Email" className="form-control border-top-0 border-right-0 border-left-0 rounded-0 bg-light border-dark mt-3" placeholder="Email" value={this.state.username} required onChange={this.handleEmailChange}/>
        <input type="password" id="password" className="form-control border-top-0 border-right-0 border-left-0 rounded-0 bg-light border-dark mt-3" placeholder="password" value={this.state.password} required onChange={this.handlePasswordChange} />
        <input type="submit" id="login-btn" className="btn btn-primary w-100 mt-3" value="Signup"/>
      </form>
      </div>
    );
  }
});
