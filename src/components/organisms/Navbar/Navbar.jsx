import React from "react";
import { images } from "../../../themes";

import "./Navbar.scss";

const navItem = [
  "home",
  "about us",
  "mission & vision",
  "our services",
  "contact us",
];
const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="mss-logo" />
      </div>
      <ul className="app__navbar-links">
        {navItem.map((item) => (
          <li key={`link-${item}`} className="app__flex">
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
