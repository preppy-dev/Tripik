import React from "react";
import Dropbox from "../Drobox";
import TripikLogo from "../../assets/img/Tripik_blanc1-01.png"
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'

const Nav = styled.nav `
height: 60px;
display:flex;
justify-content:space-between;
padding:1rem 2rem;
z-index:100;
position:fixed;
width:100%;
background-color:#034492;
`;
const Logo = styled(Link)` 

img{
  width: 120px;
}
`;
/* background-color:${({primary})=>(primary ? '#034492' :'')}; */

const Header = ()=>{
  return (
    
    <Nav /* className="header" */>
      <Logo to="/">
      <img src={TripikLogo} alt="Tripik Consulting"/>
      </Logo>
      <Dropbox/>
</Nav>

  )

}

export default Header;