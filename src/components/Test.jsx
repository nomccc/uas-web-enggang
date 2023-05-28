import { Canvas } from '@react-three/fiber';
import React from 'react'
import { styled } from 'styled-components';


const Container = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;
`;


const Test = () => {
  
  return (
  <Container>
    <Canvas>
      <mesh>
        <boxGeometry args={[3,3,3]} />
      </mesh>

    </Canvas>
  </Container>
  )
}

export default Test