import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Song from "./components/Song/Song";
import CTA from "./components/CTA/CTA";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Song />
      <CTA />
    </>
  );
};

export default App;
