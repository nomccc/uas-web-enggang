import React from "react";
import { styled } from "styled-components";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Left = styled.div`
  flex: 1;
  position: relative;
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
  border-radius: 10px;
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

const Judul = styled.h1`
  font-size: 50px;
  color: #292929;

  @media only screen and (max-width: 786px) {
    text-align: center;
  }
`;

const SubJudul = styled.h3`
  color: #0b518b;
`;

const Isi = styled.p`
background-color: #ddedff;
padding: 2% 5%;
border-radius: 15px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Tombol = styled.button`
  padding: 3% 0;
  border-radius: 30px;
  background-color: #ff5e84;
  font-weight: bold;
  border-style: none;
  
  &:hover{
    background-color: #ffc7d7;
    font-size: 14px;
    transition: 0.5s;
  }
`

const About = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Img src="./public/img/enggang.jpg" alt="" />
        </Left>
        <Right>
          <Judul>Burung Enggang</Judul>
          <SubJudul>
            Atau biasa disebut Rangkong, Julang, atau Kangkareng
          </SubJudul>
          <Isi>
            adalah burung yang mempunyai paruh berbentuk tanduk sapi tetapi
            tanpa lingkaran. Biasanya paruhnya itu berwarna terang.
          </Isi>
          <Isi>
            Enggang di Indonesia adalah penghuni hutan atau tepi hutan dengan
            ukuran besar hingga sangat besar, sering kali dengan paruh besar dan
            penutup yang berlebihan. Kehadiran mereka sering dikenali dengan
            suara kepakan sayap mereka dalam penerbangan dan panggilan khas
            mereka yang jauh.
          </Isi>
          <Tombol><a href="/Informasi.jsx">Cari tau lebih dalam</a></Tombol>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
