import React, { Component } from 'react';
import './Ask.css';


class Ask extends Component {
  render() {
    return (
      <section className="ask-question mt-4">
        <form method="post" action="/home" className="form-question">
          <div className="form-group px-3">
            <textarea className="form-control" id="askQuestion" rows="3" placeholder="Have any question to ask?"></textarea>
          </div>
          <div className="form-group d-flex flex-row justify-content-between align-items-center px-3">
            <div className="d-flex align-items-center">
            <label className="text-secondary m-0 p-2" for="usertype">anonymous</label>
            <label className="switch">
              <input id="usertype" type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <button type="submit" className="btn btn-primary ask">Ask</button>
        </div>
      </form>
    </section>
    );
  }
}

export default Ask;
