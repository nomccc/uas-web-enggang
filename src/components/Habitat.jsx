import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import Forest_Diorama from "./Forest_Diorama";

// const Section = styled.div`
//   height: 100vh;
//   scroll-snap-align: center;
//   justify-content: center;
//   display: flex;
// `;

// const Container = styled.div`
//   height: 100vh;
//   width: 70%;
//   display: flex;
//   justify-content: space-between;
// `;

// const Right = styled.div`
//   flex: 1;
//   position: relative;
// `;

// const Left = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex: 1;
//   position: relative;
//   padding: 0 2%;
// `;

// const Judul = styled.h1`
//   font-size: 70px;
//   color: #921e1e;
// `;

// const Konten = styled.p`
//   font-size: 20px;
//   font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
//   color: #2c2c2c;
//   line-height: 40px;
//   font-size: 25px;
// `;

const Habitat = () => {
  return (
    <section className="flex h-[100vh] snap-center md:h-screen">
      <div className="md:container md:mx-auto w-[1000px] flex px-8">
        <div
          id="kiri"
          className="flex-1 flex-col items-center justify-end gap-5 mt-[15%] pl-14 leading-10 "
        >
          <h1 className="text-8xl font-bold  text-[#292929]">Habitat</h1>

          <p className="text-xl font-sans text-[#2c2c2c] leading-10  ">
            Kondisi hutan sangat berpengaruh terhadap kehidupan enggang, karena
            burung ini membutuhkan tempat hidup berupa virgin forest atau hutan
            perawan sehingga dapat bebas mencari makan serta membuat sarang
            untuk mengerami telurnya.
          </p>
        </div>
        <div className="flex-1 relative py-7 w-screen pb-8">
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <Stage environment="city" intensity={0.2}>
              <Forest_Diorama />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 0, 1]} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Habitat;
