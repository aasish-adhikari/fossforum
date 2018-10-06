import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <header>
    <nav className="navbar fixed-top navbar-expand navbar-light justify-content-around bg-light">
      <a className="navbar-brand mr-0" href="home.html"><img src="images/fossforum-logo.png" width="72" height="30" alt=""/></a>
      <form className="form-inline justify-content-center">
        <input className="form-control w-50 h-50 mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn btn-outline-info my-2 my-sm-0 h-25 ml-2" type="submit"><i className="pe-7s-search"></i></button>
      </form>
      <a href="#"><i className="pe-7s-paper-plane pe-2x"></i></a>
    </nav>
    </header>
    );
  }
}

export default Header;
