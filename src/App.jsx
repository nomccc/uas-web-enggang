import { styled } from "styled-components"
import About from "./components/About"
import Goal from "./components/Goal"
import Informasi from "./components/Informasi"
import Welcome from "./components/Welcome"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Kontak from "./components/Kontak"
import ToDo from "./components/ToDo"
import Habitat from "./components/Habitat"

function App() {

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  background: url("./img/sky.jpg");
  background-size: cover; 
`

  return (
  //  <Container>
  //   {/* <Navbar/> */}
  //   <Routes>
  //     <Route path="/" element={<Welcome/>} />
  //     <Route path="/informasi" element={<Informasi/>} />
  //     <Route path="/kontak" element={<Kontak/>} />
  //   </Routes>
  //  </Container>

    <Container>
      <Navbar/>
      <Welcome/>
      <About/>
      <Habitat/>
      <Informasi/>
      <Goal/>
      <ToDo/>
      <Kontak/>
    </Container>
  )
}

export default App
