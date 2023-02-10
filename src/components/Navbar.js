import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.scss";

const Navbar = (props) => {
  const { handleVisibility, visibility } = props;

  return (
    <nav className="navbar">
      {visibility.menu === "hide" ? (
        <FontAwesomeIcon
          className="hamburger-icon"
          icon={faBars}
          onClick={() => handleVisibility("menu")}
        />
      ) : (
        <FontAwesomeIcon
          className="hamburger-icon"
          icon={faBarsStaggered}
          onClick={() => handleVisibility("menu")}
        />
      )}

      <h1 className="title">
        <Link to="/">
          Clic<span>KEY</span>
        </Link>
      </h1>
      <ul className="nav-menus">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalogue/switches">Switches</Link>
        </li>
        <li>
          <Link to="/catalogue/keycaps">Keycaps</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          handleVisibility("cart");
        }}
        className="btn-cart"
        aria-label="Cart"
      >
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </nav>
  );
};

export default Navbar;
