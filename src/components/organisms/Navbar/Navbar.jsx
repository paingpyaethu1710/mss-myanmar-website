import React, { useState } from "react";
import { navItem } from "../../../constants";
import { images } from "../../../themes";

import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="mss-logo" />
      </div>
      <ul className="app__navbar-links">
        {navItem.map((item) => (
          <li key={`link-${item.id}`} className={`app__flex`}>
            <a
              href={`#${item.id}`}
              className={`nav-item ${
                active === item.id ? "active-color" : null
              }`}
              onClick={() => setActive(item.id)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
