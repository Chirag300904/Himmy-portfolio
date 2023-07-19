import React from "react";
import "./SongCard.css";

const SongCard = ({ img, title, singer, link }) => {
  return (
    <div className="card">
      <a href={link} target="blank">
        <img src={img} alt="Song" />
      </a>

      <div className="card-desc">
        <h4>{title}</h4>
        <p>{singer}</p>
      </div>
    </div>
  );
};

export default SongCard;
