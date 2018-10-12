import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import profilePic from "../../images/Prajwal_Bhandari2.jpg";
import './Profile.css';


export default withAuth(class Profile extends Component {
  constructor(props){
    super(props);
    this.state = { user: null };
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }
  async getCurrentUser(){
   this.props.auth.getUser()
     .then(user => this.setState({user}));
 }
 componentDidMount(){
     this.getCurrentUser();
   }

  render() {
      if(!this.state.user) return null;
        return (
     <section className="user-profile container">
       <div className="d-flex flex-row flex-wrap">
       <figure className="m-3">
       <img src={profilePic} className="img img-size rounded-circle img-fluid" alt="userimage"/>
       </figure>
       <div className="align-self-center">
         <span><strong>{this.state.user.name}</strong></span><br />
         <span>{this.state.user.email}</span>
         <div className="mx-auto">
          <button className="btn btn-danger mt-2" onClick={this.props.auth.logout}>Logout</button>
        </div>
        </div>
        </div>

     </section>
   );
  }
});
