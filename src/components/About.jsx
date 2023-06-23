import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Img = styled.img`
  width: 60%;
  object-fit: contain;
  margin-bottom: auto;
  border-radius: 10px;
  /* padding-left: 10%; */
  margin-left: 29%;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }

  @media only screen and (max-width: 786px) {
    /* margin-left: 19%; */
    margin-left: 19%;
    width: 200px;
    /* height: 300px; */
    /* object-fit: cover; */
  }
`;


const About = () => {
  return (
    <section className="container flex flex-col pb-24 px-8 md:flex-row md:py-44">
        <div className="flex-1 relative">
          <Img src="./img/enggang.jpg" alt="" />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-5 pt-16 px-6">
          <h1 className="font-bold text-5xl  md:text-7xl">Burung Enggang</h1>
          <h3 className="text-[#0b518b] font-semibold font-serif">
            Atau biasa disebut Rangkong, Julang, atau Kangkareng
          </h3>
          <p>
            adalah burung yang mempunyai paruh berbentuk tanduk sapi tetapi
            tanpa lingkaran. Biasanya paruhnya itu berwarna terang.
          </p>
          <p>
            Enggang di Indonesia adalah penghuni hutan atau tepi hutan dengan
            ukuran besar hingga sangat besar, sering kali dengan paruh besar dan
            penutup yang berlebihan. Kehadiran mereka sering dikenali dengan
            suara kepakan sayap mereka dalam penerbangan dan panggilan khas
            mereka yang jauh.
          </p>
          <Link
            to="/informasi"
            className="cursor-pointer p-2 bg-red-400 text-center rounded-xl hover:bg-red-200 hover:text-[grey] transition duration-150"
          >
            Cari tau lebih dalam
          </Link>
        </div>
    </section>
  );
};

export default About;
