import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import Forest_Diorama from "./Forest_Diorama";

const Habitat = () => {
  return (
    <section className="container flex flex-col pb-24 px-8 md:flex-row md:pb-2 md:max-w-7xl">
      <div
        id="kiri"
        className="flex-1 flex-col items-center justify-end gap-5 mt-[15%] leading-10 "
      >
        <h1 className="text-6xl font-bold  text-[#292929] md:text-8xl">Habitat</h1>

        <p className="text-lg font-sans text-[#2c2c2c] leading-10 md:text-xl ">
          Kondisi hutan sangat berpengaruh terhadap kehidupan enggang, karena
          burung ini membutuhkan tempat hidup berupa virgin forest atau hutan
          perawan sehingga dapat bebas mencari makan serta membuat sarang untuk
          mengerami telurnya.
        </p>
      </div>
      <div className="flex-1 relative py-7 pb-8">
        <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
          <Stage environment="city" intensity={0.2}>
            <Forest_Diorama />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 0, 1]} />
        </Canvas>
      </div>
    </section>
  );
};

export default Habitat;
