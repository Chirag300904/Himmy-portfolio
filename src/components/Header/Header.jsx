import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section id="home">
      <div class="header">
        <h4>Hi there!</h4>
        <h1>
          I'm <br />
          <span>Music Himmy</span>
        </h1>
        <h4>A professional music composer and producer</h4>
        <button class="header-button">
          <a href="#song">Latest Tracks</a>
        </button>
      </div>
    </section>
  );
};

export default Header;
