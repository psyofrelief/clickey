import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const { visibility, handleVisibility } = props;
  return (
    <div className={`menu ${visibility.menu}`}>
      <div className="cont-menu-links">
        <Link to="/" onClick={() => handleVisibility("menu")}>
          Home
        </Link>
        <Link to="/catalogue/switches" onClick={() => handleVisibility("menu")}>
          Switches
        </Link>
        <Link to="/catalogue/keycaps" onClick={() => handleVisibility("menu")}>
          Keycaps
        </Link>
      </div>
    </div>
  );
};

export default Menu;
