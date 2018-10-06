import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
  render() {
    return (
      <nav className="navbar p-0 navbar-expand fixed-bottom navbar-light bg-light">
      <ul className="nav list-unstyled w-100 m-0 d-flex flex-row flex-nowrap justify-content-around">
        <li className="nav-item active">
          <a className="nav-link" id="homeNav" href="/home"><i className="pe-7s-home pe-2x pe-va pe-fw"></i><span className="sr-only">(current)</span><p className="text-muted fsize-11">Home</p></a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/community"><i className="pe-7s-network pe-2x pe-va pe-fw"></i><p className="text-muted fsize-11">Groups</p></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id= "askNav" href="/ask"><i className="pe-7s-pen pe-2x pe-va pe-fw"></i><p className="text-muted fsize-11">Ask</p></a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-center" href="#"><i className="pe-7s-bell pe-2x pe-va pe-fw"></i><p className="text-muted fsize-11">Notifications</p></a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/profile"><i className="pe-7s-user pe-2x pe-va pe-fw"></i><p className="text-muted fsize-11">Account</p></a>
        </li>
      </ul>
    </nav>
    );
  }
}

export default Footer;
