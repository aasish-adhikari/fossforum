import React, { Component } from 'react';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div>
      <div className="card border-secondary border-secondary border-left-0 border-right-0 rounded-0 mb-3">
        <div className="card-body p-0">
            <h5 className="card-title m-0 p-3">What is name of your friend?</h5>
            <p className="card-text text-secondary font-weight-light font-small px-3">asked by Aasish, 15min ago</p>
            <div className="btn-toolbar card-footer p-0" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-2  w-100 d-flex justify-content-around" role="group" aria-label="First group">
              <button type="button" className="btn btn-light"><i className="pe-7s-like2 pe-2x pe-va pe-fw"></i></button>
              <button type="button" className="btn btn-light"><i className="pe-7s-light pe-2x pe-va pe-fw"></i></button>
              <button type="button" className="btn btn-light"><i className="pe-7s-glasses pe-2x pe-va pe-fw"></i></button>
              <button type="button" className="btn btn-light"><i className="pe-7s-share pe-2x pe-va pe-fw"></i></button>
            </div>
            </div>
        </div>
      </div>
      <div className="card">
  	    <div className="card-body">
  	        <div className="row">
          	    <div className="col-2 pl-1 pr-0">
          	        <img src="images/Prajwal_Bhandari2.jpg" className="img img-size rounded-circle img-fluid" alt="userimage"/>
          	    </div>
          	    <div className="col-9 pl-1 pr-0">
          	        <p>
          	            <a className="float-left" href="#"><strong>Prajwal</strong></a>
          	       </p>
          	       // <div className="clearfix"></div>

                   <p className="text-secondary font-small">15 Minutes Ago</p>
          	        <p>I have commented this</p>
          	        <p>
          	            <a className="float-right btn btn-outline-danger ml-2 pl-1"><i className="pe-7s-back pe-lg pe-va pe-fw"></i> Reply</a>
          	            <a className="float-right btn text-white btn-danger pl-1"> <i className="pe-7s-gleam pe-lg pe-va pe-fw"></i> Upvote</a>
          	       </p>
          	    </div>
  	          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Home;
