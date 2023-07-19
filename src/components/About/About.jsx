import React from "react";
import "./About.css";

import profile from "../../assets/images/profile.jpg";

const About = () => {
  return (
    <section id="about">
      <h2 className="s-title">
        About <span className="s-title-span">Me</span>
      </h2>

      <div className="about-box">
        <div className="about-img">
          <div className="orange-box">
            <img src={profile} alt="Profile" />
          </div>
        </div>
        <div className="about-desc">
          <p>
            Hello there! I'm Himmy, a passionate individual with a deep-rooted
            love for music. Over the past four years, I have had the incredible
            opportunity to immerse myself in the dynamic world of the music
            industry. Through various roles and experiences, I've honed my
            skills and expertise, allowing me to contribute uniquely to this
            creative domain. From working behind the scenes to collaborating
            with talented artists, I've gained a profound understanding of the
            intricacies that make music an enchanting form of expression. Music
            has not only been a career for me but a true calling, and I'm
            excited to continue exploring and contributing to this ever-evolving
            industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
