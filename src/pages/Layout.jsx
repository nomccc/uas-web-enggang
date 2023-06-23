import React from "react";
import About from "../components/About"
import Goal from "../components/Goal"
import Informasi from "../components/Informasi"
import Welcome from "../components/Welcome"
import Navbar from "../components/Navbar"
import Kontak from "../components/Kontak"
import ToDo from "../components/ToDo"
import Habitat from "../components/Habitat"
import "../style.css"
import { Outlet } from "react-router-dom";





const Layout = () => {
  return (
    // <Container>
    <div className="container">
      <Navbar/>
      <Outlet/>

    </div>

  );
};

export default Layout;
