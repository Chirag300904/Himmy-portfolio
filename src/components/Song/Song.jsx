import React from "react";
import "./Song.css";
import SongCard from "../SongCard/SongCard";

import img1 from "../../assets/song/moon_banke.jpg";
import img2 from "../../assets/song/desi_drill.png";
import img3 from "../../assets/song/bhole_bhandari.png";
import img4 from "../../assets/song/betrayal.png";
import img5 from "../../assets/song/lori.jpg";

const Song = () => {
  return (
    <section id="song">
      <h2 className="s-title-span">SONGS</h2>

      <div className="songs">
        <SongCard
          link="https://open.spotify.com/track/41TnlmGZcQlL1XZLfoVbY7?si=2b475480cce04fd2"
          img={img1}
          title="Moon Banke"
          singer="Yashu "
        />
        <SongCard
          link="https://open.spotify.com/track/5zYCQOPqlO9s3esoh2FJnE?si=28bc51aa4a394733"
          img={img2}
          title="Desi Drill"
          singer="Maccky Jhajjaria"
        />
        <SongCard
          link="https://youtu.be/BfIAhgbGEu4"
          img={img3}
          title="Bhola Bhandari"
          singer="Maccky Jhajjaria"
        />
        <SongCard
          link="https://open.spotify.com/track/5IUEAMavUh4ub3SPPENx6L?si=3ccbdbd50cee40d4"
          img={img4}
          title="Betrayal"
          singer="Music Himmy"
        />
        <SongCard
          link="https://open.spotify.com/track/2yJ94V9z7cTZsCN9f1xdmN?si=6ca66b02210045d9"
          img={img5}
          title="Lori"
          singer="Music Himmy"
        />
      </div>

      <div class="playlist">
        <button>
          <a
            target="blank"
            href="https://www.youtube.com/watch?v=pyiVJAPpHT0&list=PLzb7BPw-Seb4ZQzy5-10zdMDEEAamy5m0&ab_channel=MusicHimmy"
          >
            My Playlist
          </a>
        </button>
      </div>
    </section>
  );
};

export default Song;
