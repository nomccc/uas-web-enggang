import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
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
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 786px) {
    flex: 1;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 786px) {
    flex: 1;
    width: 100%;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px black;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #0a22ff;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    &::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const ListToDo = styled.li`
  cursor: pointer;
`;

const data = ["Apa", "Yang", "Harus", "Dilakukan?"];
const hal = [
  "- Mendukung upaya pelestarian lingkungan",
  "- Melaporkan orang yang berburu satwa langka",
  "- Hindari transaksi binatang langka",
  "- Menjaga Lingkungan Agar Tetap terjaga",
];

const ToDo = () => {
  return (
    <section className="container flex flex-row py-24 px-8  md:py-44 md:max-w-7xl">
      <div className="flex-1 flex items-center pl-[10%]">
        <List>
          {data.map((item) => (
            <ListItem key={item} text={item} onClick={() => setWork(item)}>
              {item}
            </ListItem>
          ))}
        </List>
      </div>
      <div className="flex-1 flex items-center  pr-[10%] ">
        <List>
          {hal.map((item) => (
            <ListToDo
              className="font-sans font-medium text-xl leading-loose hover:text-[21px] hover:text-orange-600 ease-in duration-300 "
              key={item}
              text={item}
              onClick={() => setWork(item)}
            >
              {item}
            </ListToDo>
          ))}
        </List>
      </div>
    </section>
  );
};

export default ToDo;
