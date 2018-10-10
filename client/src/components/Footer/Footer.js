import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


class Footer extends Component {
  render() {
    return (
      <nav className="navbar p-0 navbar-expand fixed-bottom navbar-light bg-light">
      <ul className="nav list-unstyled w-100 m-0 d-flex flex-row flex-nowrap justify-content-around">
        <li className="nav-item active">
          <Link className="nav-link" id="homeNav" to="/home"><i className="pe-7s-home pe-2x pe-va pe-fw"></i><span className="sr-only">(current)</span><p className="text-muted fsize-11">Home</p></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="/community"><i className="pe-7s-network pe-2x pe-va pe-fw"></i><p className="text-muted fsize-11">Groups</p></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id= "askNav" to="/ask"><i className="pe-7s-pen pe-2x pe-va pe-fw"></i><p className="text-muted fsize-11">Ask</p></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled text-center" to="#"><i className="pe-7s-bell pe-2x pe-va pe-fw"></i><p className="text-muted fsize-11">Notifications</p></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="/profile"><i className="pe-7s-user pe-2x pe-va pe-fw"></i><p className="text-muted fsize-11">Account</p></Link>
        </li>
      </ul>
    </nav>
    );
  }
}

export default Footer;
