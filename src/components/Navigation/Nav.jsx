import React from "react";
import "./nav.scss";
import Searchicon from "../../images/icons8-search.png";
import Usaflag from "../../images/icons8-usa.png";
import Bellicon from "../../images/icons8-bell.png";
import Setting from "../../images/icons8-settings.png";
import Home from "../../images/icons8-health-data.png";
import User from "../../images/icons8-users.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-heading">Dashboard</div>
        <div className="navbar-links">
          <span>
            <img src={Searchicon} alt="" />
          </span>
          <span>
            <img src={Usaflag} alt="" />
          </span>
          <span>
            <img src={Home} alt="" />
          </span>
          <span>
            <img src={Bellicon} alt="" />
          </span>
          <span>
            <img src={Setting} alt="" />
          </span>
          <span>
            <img src={User} alt="" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
