import React from "react";
import { styled } from "styled-components";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Earth from "./Earth";

const Goal = () => {
  return (
    <section className=" flex h-[100vh] snap-center md:h-screen">
      <div className="md:container md:mx-auto w-[1000vh] flex p-8  ">
        <div
          id="kiri"
          className="flex-1 flex-col items-center justify-start gap-11 px-7 mt-[10%] leading-10 "
        >
          <h1 className="text-7xl font-bold text-[#921e1e]">Terancam Punah</h1>
          <p className="text-lg pr-9 pt-5 font-sans">
            berdasarkan daftar IUCN tahun 2018 burung Enggang Gading telah
            termasuk dalam satwa berstatus terancam punah (Critically
            Endangered), sebagian besar akibat tingginya tingkat perburuan liar,
            perdagangan ilegal, dan juga tingkat perkembanganbiakan yang lambat
          </p>
        </div>
        <div id="kanan" className="flex-1 relative p-7 ">
          <Canvas>
            <Stage environment="city" intensity={0.7}>
              <Earth />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={0.2} />
            <directionalLight position={[3, 2, 1]} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Goal;
