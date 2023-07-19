import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = (
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About Me</a>
      </li>
      <li>
        <a href="#song">Songs</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );

  return (
    <nav className="nav">
      <div className="logo">
        <h1>
          <i className="fa-solid fa-music"></i> Music Himmy
        </h1>
      </div>
      <div className="nav-link">{links}</div>
      <div className="phone">
        <i className="fa fa-bars" onClick={() => setNav(true)}></i>
        {nav ? (
          <>
            {" "}
            <i
              className="fa-solid fa-xmark cross"
              onClick={() => setNav(false)}
            ></i>
            {links}
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
