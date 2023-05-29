import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";


const Img = styled.img`
  width: 60%;
  object-fit: contain;
  position: absolute;
  top: 40px;
  bottom: 0;
  left: 15%;
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

// const Judul = styled.h1`
//   font-size: 50px;
//   color: #292929;

//   @media only screen and (max-width: 786px) {
//     text-align: center;
//   }
// `;

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

  &:hover {
    background-color: #ffc7d7;
    font-size: 14px;
    transition: 0.5s;
    color: grey;
  }
`;

const About = () => {
  return (
<<<<<<< HEAD
    <section className="md:h-screen flex h-[200vh] items-center snap-center">
      <div className="md:container md:mx-auto w-[1000px] flex px-8">
        <div className="flex-1 relative">
          <Img src="./public/img/enggang.jpg" alt="" />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-5 pt-10 px-6">
          <h1 className="font-bold text-7xl">Burung Enggang</h1>
          {/* <h1 className="text-5xl" >Burung Enggang</h1> */}
          <h3 className="text-[#0b518b] font-semibold font-serif">
=======
    <Section>
      <Container>
        <Left>
          <Img src="./img/enggang.jpg" alt="" />
        </Left>
        <Right>
          <Judul>Burung Enggang</Judul>
          <SubJudul>
>>>>>>> 4ac238251551385209a3d6d91c9887cd3eeac552
            Atau biasa disebut Rangkong, Julang, atau Kangkareng
          </h3>
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
            <Link to="/informasi" className="cursor-pointer p-2 bg-red-400 text-center rounded-xl hover:bg-red-200 hover:text-[grey] transition duration-150">
              Cari tau lebih dalam
            </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
