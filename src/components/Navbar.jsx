import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div`
display: flex;
justify-content: center;
`;

const Container = styled.div`
/* width: 90%; */
width: 1200px;
/* background-color: powderblue ; */
display: flex;
justify-content: space-between;
align-items: center;
padding: 2% 0px;
position: fixed;

@media only screen and (max-width: 786px) {
    width: 100%;
  }


`
;

// const Links = styled.div`
// display: flex;
// align-items: center;
// gap: 100px;
// `;

const Logo = styled.h1`
cursor: pointer;
/* display: flex; */
align-items: start;
font-family: 'Times New Roman', Times, serif;
font-style: italic;
color: #ffcc54;

@media only screen and (max-width: 786px) {
   display: none;
  }

`;

const List = styled.ul`
display: flex;
gap: 20px;
align-items: center;
list-style: none;
`;
// 
const ListItem  = styled.li`
cursor: pointer;
padding-right: 20px;
z-index: 100;
font-weight: bold;
font-size: 20px;
`;


const Navbar = () => {
  return (
    <Section>
      <Container>
        {/* <Links> */}
        <Logo>Fly Enggang</Logo>
        <List>
          <ListItem>
            <a href="/">Beranda</a>
          </ListItem>
          <ListItem>
            <a href="/informasi">Informasi</a>
          </ListItem>
          <ListItem>
            <a href="/kontak">Kontak</a>
          </ListItem>
        </List>
        {/* </Links> */}
      </Container>
    </Section>
  )
}

export default Navbar