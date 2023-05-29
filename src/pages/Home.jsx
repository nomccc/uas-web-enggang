import React from "react";
import About from "../components/About";
import Goal from "../components/Goal";
import Informasi from "../components/Informasi";
import Welcome from "../components/Welcome";
import Navbar from "../components/Navbar";
import Kontak from "../components/Kontak";
import ToDo from "../components/ToDo";
import Habitat from "../components/Habitat";

const Home = () => {
  return (
    <div className="bg-sky bg-cover">
      <Welcome />
      <About />
      <Goal />
      <ToDo />
      {/* <Kontak /> */}
    </div>
  );
};

export default Home;
