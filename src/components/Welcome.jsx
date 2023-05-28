import React from "react";
import { styled } from "styled-components";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import ToDo from "./ToDo";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 786px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  @media only screen and (max-width: 786px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 786px) {
    flex: 1;
    align-items: center;
  }
`;

const Judul = styled.h1`
  font-size: 70px;
  color: #292929;

  @media only screen and (max-width: 786px) {
    text-align: center;
  }
`;

const SubJudul = styled.h3`
  color: #0b518b;
`;

const Deskripsi = styled.p``;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 786px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 70%;
  object-fit: contain;
  position: absolute;
  top: 90px;
  bottom: 0;
  left: 50px;
  right: 0;
  margin-bottom: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }

  @media only screen and (max-width: 786px) {
    width: 300px;
    height: 300px;
    top: 250px;
  }
`;

const Welcome = () => {
  return (
    <Section>
      {/* <Navbar /> */}
      <Container>
        <Left>
          <Judul>Sadari. Lindungi.</Judul>
          <SubJudul>Mari Mengenal Burung Enggang</SubJudul>
          <Deskripsi>
            Bersama mulai mengenal dan melindungi apa yang jadi kebanggaan kita
          </Deskripsi>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[4, 2, 2]} scale={1} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="blue"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/enggang2.png" alt="" />
        </Right>
      </Container>
    </Section>
  );
};

export default Welcome;
