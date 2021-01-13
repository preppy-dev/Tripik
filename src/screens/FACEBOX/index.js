import React from "react"
import Header from "../../components/Header"
import Hero from "../../components/Hero";
/* import BgHome from "../../assets/img/bghome.png" */
import SliderData  from '../../data/SliderData';
import GlobalStyle from "../../GlobalStyles";


import './style.css';
const Facebox = ()=>{
  return (
    <>
      <GlobalStyle/>
      <Header/>
   
      <Hero slides={SliderData}/>
      <div className="socialface">

      </div>
   </> 
  )

}

export default Facebox;