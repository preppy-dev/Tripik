import React from "react"
import Header from "../../components/Header";
import LearnImg from './../../assets/learnimg.png'

const LearnWithTheBox =()=>{
return (
  <div className="learnbox">
    <div className="header_color">
    <Header/>
    </div>
    <div className="learncontener">
    <div className="infoaction">
      <div className="info">
        <h1>Découvrez les compétences<br/> de demain. Et prenez votre <br/>
            carrière en main.</h1>
        <p>Voyez ce jeu exquis wallon, de graphie en kit mais bref.</p>
      </div>
      <div><img src={LearnImg} alt="learn image"/></div>
    </div>
    <div className="learnsbox">
      <div className="oneboxlearn">
        <img src="" alt="" />
        <h2>Les formations professionnelles</h2>
      </div>
      <div className="oneboxlearn">
        <img src="" alt="" />
        <h2>Les formations continues</h2>
      </div>
      <div className="oneboxlearn">
        <img src="" alt="" />
        <h2>Les formations relatives</h2>
      </div>
    </div>
    </div>
  </div>
)
}

export default LearnWithTheBox;