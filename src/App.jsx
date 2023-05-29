import { styled } from "styled-components";
import About from "./components/About";
import Goal from "./components/Goal";
import Info from "./pages/Info";
import Tentang from "./pages/Tentang";

import Home from "./pages/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    background: url("./img/sky.jpg");
    background-size: cover;
  `;

  return (
    //  <Container>
    //   {/* <Navbar/> */}
    //   <Routes>
    //     <Route path="/" element={<Welcome/>} />
    //     <Route path="/informasi" element={<Informasi/>} />
    //     <Route path="/kontak" element={<Kontak/>} />
    //   </Routes>
    //  </Container>

    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/informasi" element={<Info/>}/>
          <Route path="/kontak" element={<Tentang/>}/>
        </Route>
      </Routes>
    </Router>

    // <Container>
    //   <Navbar/>
    //   <Welcome/>
    //   <About/>
    //   <Habitat/>
    //   <Informasi/>
    //   <Goal/>
    //   <ToDo/>
    //   <Kontak/>
    // </Container>
  );
}

export default App;
