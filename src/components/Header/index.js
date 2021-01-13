import React from "react";
import Dropbox from "../Drobox";
import TripikLogo from "../../assets/img/Tripik_blanc1-01.png"
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useState } from "react";
import NavBar from "../NavBar";


/* background-color:${({primary})=>(primary ? '#034492' :'')}; */

const Header = ()=>{
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
      <>
      <NavBar TripikLogo={TripikLogo} toggle={toggle}/>
      <Dropbox isOpen={isOpen} toggle={toggle}/>
      </>

  )

}

export default Header;