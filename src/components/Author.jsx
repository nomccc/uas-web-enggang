import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Duck from "./Duck";

const Author = () => {
  return (
    <section className="h-auto snap-center">
      <div className="container w-full h-full flex-row justify-center items-center pb-20">
        <div className="flex-1 justify-center  items-center flex-row ">
          <Canvas>
            <Stage environment="city" intensity={0.7}>
              <Duck/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={0.2} />
            <directionalLight position={[3, 2, 1]} />
          </Canvas>
        </div>
        <div className="flex flex-1 justify-center  items-center flex-col mb-8">
          <h1 className="font-bold font-sans text-xl">
            Website ini dibangun oleh:
          </h1>
          <h2 className="text-[red] text-base">Avivah :D</h2>
          <p className="text-sm">Menggunakan framework React JS dan Three JS</p>
        </div>
      </div>
    </section>
  );
};

export default Author;
