import React from "react"
import Header from "../../components/Header";
import LearnImg from './../../assets/learnimg.png'

const DevelopYourBox =()=>{
return (
  <div className="developbox">
    <div className="header_color">
    <Header/>
    </div>
    <div className="developcontener">
    <div className="infoaction">
      <div className="info">
        <h1>Préparez vos <br/>équipes au monde <br/>de demain</h1>
        <p>Voyez ce jeu exquis wallon, de graphie en kit mais bref.</p>
      </div>
      <div><img src={LearnImg} alt="develop image"/></div>
    </div>
    <div className="developsbox">
      <div className="oneboxdevelop">
        <img src="" alt="" />
        <h2>étude de projet </h2>
      </div>
      <div className="oneboxdevelop">
        <img src="" alt="" />
        <h2>stratégie de Devellopement d'entreprise</h2>
      </div>
      <div className="oneboxdevelop">
        <img src="" alt="" />
        <h2> recherche de financement </h2>
      </div>
      <div className="oneboxdevelop">
        <img src="" alt="" />
        <h2>  Intermédiation</h2>
      </div>
      <div className="oneboxdevelop">
        <img src="" alt="" />
        <h2> gestion RH </h2>
      </div>
    </div>
    </div>
  </div>
)
}

export default DevelopYourBox;