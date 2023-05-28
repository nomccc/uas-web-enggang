import React from "react";
import { styled } from "styled-components";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Earth from "./Earth";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  justify-content: center;
  display: flex;
`;

const Container = styled.div`
  height: 100vh;
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Left = styled.div`
  flex: 1;
  position: relative;
`;

const Judul = styled.h1`
  font-size: 70px;
  color: #921e1e;
`;

const Konten = styled.p`
font-size: 20px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color: #2c2c2c;

`

const Goal = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas>
            <Stage environment="city" intensity={0.7}>
              <Earth />
            </Stage>

            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={0.2} />
            <directionalLight position={[3, 2, 1]} />
            {/* <Bola /> */}
          </Canvas>
        </Left>
        <Right>
          <Judul>Terancam Punah</Judul>
          <Konten>Tingginya tingkat perburuan dan perdagangan ilegal</Konten>
          <Konten>Serta habitat yang makin tergusur</Konten>
        </Right>
      </Container>
    </Section>
  );
};

export default Goal;
