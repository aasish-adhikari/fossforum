import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import './Ask.css';


export default withAuth(
  class Ask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question:'',
      author:''
    }
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    //this.handleSubjecChange = this.handleSubjectChange.bind(this);
};

  handleQuestionChange(e){
    this.setState({question:e.target.value})
  }


async getCurrentUser(){
 this.props.auth.getUser()
   .then(author => this.setState({author}));
}
componentDidMount(){
  console.log("Ask component mounted")
   this.getCurrentUser();
 }
 addQuestion(e){
   e.preventDefault();
   fetch('http://localhost:3030/api/addpost', {
     method: 'POST',
      mode: "no-cors",
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(this.state)
    }).then(response => {
     console.log('question added');
     <Redirect to="/"/>;
   }).catch(err =>{
       console.log(err)
     });
 }
  render() {
    return (
      <section className="ask-question mt-4">
        <form className="form-question">
          <div className="form-group px-3">
            <textarea className="form-control" id="askQuestion" rows="3" placeholder="Have any question to ask?" onChange={this.handleQuestionChange}></textarea>
          </div>
          <div className="form-group d-flex flex-row justify-content-between align-items-center px-3">
            <div className="d-flex align-items-center">
            <label className="text-secondary m-0 p-2" for="usertype">anonymous</label>
            <label className="switch">
              <input id="usertype" type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <a href="/" className="btn btn-primary ask">Ask</a>
        </div>
      </form>
    </section>
    );
  }
});
