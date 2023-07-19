import React from "react";
import "./Song.css";
import SongCard from "../SongCard/SongCard";

import img1 from "../../assets/song/1.jpg";
import img2 from "../../assets/song/2.jpg";
import img3 from "../../assets/song/3.png";
import img4 from "../../assets/song/4.png";
import img5 from "../../assets/song/5.png";

const Song = () => {
  return (
    <section id="song">
      <h2 className="s-title-span">SONGS</h2>

      <div className="songs">
        <SongCard
          link="https://youtu.be/BfIAhgbGEu4"
          img={img1}
          title="Bhole Bhandari"
          singer="Maccky Jhajjaria"
        />
        <SongCard
          link="https://youtu.be/sG6ab0Mn_JM"
          img={img2}
          title="Bhole Ki Maya"
          singer="Maccky Jhajjaria"
        />
        <SongCard
          link="https://open.spotify.com/track/4soStzEciWes3tmKx5BbRu?si=ac71df3bfd1f4a15"
          img={img3}
          title="Babbar"
          singer="RoOy x Vin Wrld"
        />
        <SongCard
          link="https://open.spotify.com/track/1iIcA1G4Gw4qq8nXB1Kvtl?si=f6c2b988977b4ca9"
          img={img4}
          title="Mafia Love"
          singer="Maccky Jhajjaria"
        />
        <SongCard
          link="https://open.spotify.com/track/2txmJSOAcnLe0KQrJ5zAZ7?si=f4d74286691c44d5"
          img={img5}
          title="Wait"
          singer="Yashu"
        />
      </div>
    </section>
  );
};

export default Song;
