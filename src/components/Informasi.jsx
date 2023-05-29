import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 786px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  @media only screen and (max-width: 786px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Middle = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Img = styled.img`
  width: 50%;
  object-fit: contain;
  padding-bottom: 18%;
  border-radius: 20px;
  /* margin-bottom: auto; */
  /* animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  } */

  @media only screen and (max-width: 786px) {
    width: 300px;
    height: 300px;
    top: 250px;
  }
`;

const Konten = styled.p`
font-size: 20px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color: #2c2c2c;

`


const Informasi = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Img src="./img/rangkong_gading.png"/>
        </Left>
        <Middle></Middle>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default Informasi;
