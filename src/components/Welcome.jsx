import React from "react";
import { styled } from "styled-components";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";


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
    <section className=" flex h-[100vh] snap-center md:h-screen w-full">
      <div className="md:container md:mx-auto w-[1000%] flex px-8  ">
        <div id="kiri" className="flex-1 flex-col items-center justify-end gap-5 mt-[15%] leading-10">
          <h1 className="text-8xl font-bold  text-[#292929] tablet:w-auto">Sadari. Lindungi.</h1>
          <h3 className="text-[#197dc9] font-semibold text-[25px] py-6 sm:w-auto">Mari Mengenal Burung Enggang</h3>
          <p className="text-xl" >
            Bersama mulai mengenal dan melindungi apa yang jadi kebanggaan kita
          </p>
        </div>

        <div id="kanan" className="flex-1 relative py-7 w-screen">
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
      </div>
    </section>
  );
};

export default Welcome;
