import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import Drop1 from './../assets/drop1.png';
import Drop2 from './../assets/drop2.png';
import Drop3 from './../assets/drop3.png';
import Drop4 from './../assets/drop4.png';

const Nav = styled.nav `

`;
const MenuBars = styled.div `
  display:grid;
  grid-template-columns: 1fr 1fr;
  cursor:pointer;
  position:absolute;
  top:5vh;
  right:4vh;
  @media screen and (max-width:768px){
  transform:translate(-30%, 20%);
  
}`;

const OneDrop = styled.div `
margin:2px;
  &:hover{
    padding:1rem;
    
  }
  
`;

const Logo = styled(Link)` 

img{
  width: 160px;
}
`;
const DropImage = styled.img`

`;

function NavBar({TripikLogo,toggle}) {
  return (
    <Nav className="">
      <Logo to="/">
      <img src={TripikLogo} alt="Tripik Consulting"/>
      </Logo>
      <MenuBars onClick={toggle}>
      <OneDrop className="">
      <DropImage src={Drop4} />
      </OneDrop>
      <OneDrop className="">
      <DropImage src={Drop2} />
      </OneDrop>
      <OneDrop className="">
        <DropImage src={Drop1} alt="icone" />
      </OneDrop>
      <OneDrop className="" style={{position:'relative', top:'4'}}>
      <DropImage src={Drop3} />
      </OneDrop>
      </MenuBars>


    </Nav>
  )
}

export default NavBar
