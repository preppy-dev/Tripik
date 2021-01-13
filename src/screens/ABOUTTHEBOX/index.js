import React from "react";
import Header from "../../components/Header";
import LearnImg from './../../assets/boxabout.png'



const Aboutthebox = ()=>{
  return (
    <div className="aboutthebox">
     <div className="header_color-blue">
    <Header/>
    </div>

    <div className="about-contener">
    <div className="about-infoaction">
      <div className="about-info">
        <h1>Qui sommes nous ?</h1>
        <p>L'agence TRIPIK PARTNERS est un bureau d'études, de conseils et de formations professionnels. 
Nous apportons notre expertise à toute entreprise, privée et publique, dans le cadre de la réalisation de ses objectifs, remise à niveau, prise en charge de projets, recherche de financement, stratégie de communication...
Nous appliquons des méthodes novatrices afin de donner satisfactions aux entreprises que nous accompagnons et aux personnes que nous formons</p>
      </div>
      <div><img src={LearnImg} alt="learn image"/></div>
    </div>
    
    </div>
    </div>
  )

}

export default Aboutthebox;