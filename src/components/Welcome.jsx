import React from "react";
import { styled } from "styled-components";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Img = styled.img`
  width: 60%;
  object-fit: contain;
  position: absolute;
  top: 90px;
  /* bottom: 0; */
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
    position: absolute;
    width: 40%;
    left: 30%;
    top: 20%;

  }
`;

const Welcome = () => {
  return (
    <section className="container flex flex-col pb-24 px-8 md:flex-row md:pb-2 md:max-w-7xl">
      <div
        id="kiri"
        className="flex-1 flex-col items-center justify-end gap-5 mt-[15%] leading-10"
      >
        <h1 className="text-7xl font-bold  text-[#292929] md:text-8xl">
          Sadari. Lindungi.
        </h1>
        <h3 className="text-[#197dc9] font-semibold text-[18px] py-3 md:text-[25px] md:py-6">
          Mari Mengenal Burung Enggang
        </h3>
        <p className="text-lg  md:text-xl">
          Bersama mulai mengenal dan melindungi apa yang jadi kebanggaan kita
        </p>
      </div>

      <div
        id="kanan"
        className="flex-1 relative p-7  "
      >
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
        <Img src="./img/enggang2.png"></Img>

        {/* <img id="enggang-welcome"
            className="w-[70%] object-contain top-24 left-12 animate-pulse absolute"
            src="./img/enggang2.png"
            alt=""
          /> */}
      </div>
    </section>
  );
};

export default Welcome;
