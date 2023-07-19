import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <section id="contact">
      <h2 className="s-title">
        GET IN <span className="s-title-span">TOUCH</span>
      </h2>

      <div class="contact-info">
        <div class="contact">
          <form action="mailto:hranghera@yahoo.com" autoComplete="off">
            <input
              autoComplete="off"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="message" placeholder="Message" />
            <button class="contact-button" type="submit">
              Send <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
        <div class="location">
          <div class="home">
            <div class="locale-icon">
              <i class="fa fa-phone"></i>
            </div>
            <div class="locale">
              <h4>Phone: </h4>
              <p>+91 82958 38672</p>
            </div>
          </div>
          <div class="home">
            <div class="locale-icon">
              <i class="fa fa-envelope"></i>
            </div>
            <div class="locale">
              <h4>Email: </h4>
              <p>hranghera@yahoo.com</p>
            </div>
          </div>
          <div class="home">
            <div class="locale-icon">
              <i class="fa fa-map-marker"></i>
            </div>
            <div class="locale">
              <h4>Location: </h4>
              <p>Rewari, Haryana</p>
            </div>
          </div>
          <div className="social">
            <a href="https://t.snapchat.com/v4M5ASqB" target="blank">
              <i className="fa-brands fa-snapchat"></i>
            </a>
            <a href="https://youtube.com/@musichimmy22" target="blank">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://instagram.com/iamhimmy_22?igshid=MzRlODBiNWFlZA=="
              target="blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">Copyright © All Rights Reserved</div>
    </section>
  );
};

export default CTA;
