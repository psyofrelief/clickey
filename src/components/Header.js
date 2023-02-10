import React from "react";
import Untitled from "../img/Untitled.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <h2 className="header-heading">CUSTOM CRIMSON KEYCAPS</h2>

      <img alt="keycaps" className="header-img" src={Untitled} />
      <button className="btn header" tabIndex="-1">
        <Link to="/products/Crimson-Custom-Keycaps">Shop now</Link>
      </button>
    </header>
  );
};

export default Header;
