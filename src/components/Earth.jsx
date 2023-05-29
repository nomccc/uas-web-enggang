/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: BamPistache (https://sketchfab.com/karinkreeft8)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/earth-0caafb7e837047a688a3e504c0ea74af
title: Earth
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/earth.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh 
            castShadow
            receiveShadow
            geometry={nodes.earth4_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.earth4_lambert1_0.geometry}
            material={materials.lambert1}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/earth.gltf");
