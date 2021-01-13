import React from "react"
import Header from "../../components/Header"
import GlobalStyle from "../../GlobalStyles";
import { Link } from 'react-router-dom'
import './style.css'
import Combox from "../../components/Combox";
import ComData  from '../../data/ComData';
import Footer from "../../components/Footer";


const ComfTheBox =()=>{
return (
  <div className="comboxs">
     <div className="header_color">
      <Header/>
     </div>
     <div className="combox">
     <Combox ComData={ComData}/>
    </div>
    <Footer />
    </div>

)
}

export default ComfTheBox;