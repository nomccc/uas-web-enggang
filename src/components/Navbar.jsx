import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components'

const Section = styled.div`
display: flex;
justify-content: center;
`;

const Container = styled.div`
/* width: 90%; */
width: 100%;
/* background-color: powderblue ; */
display: flex;
justify-content: space-between;
align-items: center;
padding: 1% 5%;
position: fixed;
z-index: 10;
background-color: #ffffff;




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
color: #cfcf13;
font-size: 25px;
font-weight: bold;
-webkit-text-stroke: 0.5px black;

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
      <Container className='drop-shadow-xl'>
        {/* <Links> */}
        <Logo>HelloEnggang</Logo>
        <List>
          <ListItem>
            <Link to="/" className='cursor-pointer'>Beranda</Link>
          </ListItem>
          <ListItem>
            <Link to="/informasi" className='cursor-pointer' >Informasi</Link>

          </ListItem>
          <ListItem>
            <Link to="/kontak">Tentang</Link>
          </ListItem>
        </List>
        {/* </Links> */}
      </Container>
    </Section>
  )
}

export default Navbar