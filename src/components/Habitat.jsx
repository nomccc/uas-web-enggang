import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import Forest_Diorama from "./Forest_Diorama";

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
  position: relative;
`;

const Left = styled.div`
  display: flex ;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
  padding: 0 2%;
`;

const Judul = styled.h1`
  font-size: 70px;
  color: #921e1e;
`;

const Konten = styled.p`
  font-size: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #2c2c2c;
  line-height: 40px;
  font-size: 25px;
`;

const Habitat = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Konten>
            Kondisi hutan sangat berpengaruh terhadap kehidupan rangkong, karena
            burung ini membutuhkan tempat hidup berupa virgin forest atau hutan
            perawan sehingga dapat bebas mencari makan serta membuat sarang
            untuk mengerami telurnya.
          </Konten>
        </Left>
        <Right>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <Stage environment="city" intensity={0.2}>
              <Forest_Diorama />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={0.1} />
            <directionalLight position={[3, 2, 1]} />
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Habitat;
