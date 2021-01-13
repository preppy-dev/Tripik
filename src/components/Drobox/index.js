import React from 'react'
import styled from 'styled-components'
import menuData  from '../../data/menuData';
import {Link} from 'react-router-dom';
import TripikImg from './../../assets/Tripik.png' 
import CloseBtnIcon from './../../assets/CloseBtn.png' 
import ReturnBtnIcon from './../../assets/ReturnBtnIcon.png' 

const DropdownContainerl = styled.div `

`

const DropdownContainer = styled.div `
position:fixed;
z-index:999;
width:100%;
height: 100vh;
background:#000000;
top:0;
left:0;
transition:0.2s ease-in;

opacity:${({isOpen}) =>(isOpen ? '1':'0')};
top:${({isOpen}) =>(isOpen ? '0':'-100%')};
`;

const Icon = styled.div `
position:absolute;
top:1.2rem;
right: 1.5rem;
background:transparent;
font-size: 2rem;
cursor:pointer;
outline:none;
`;
/* const CloseIcon = styled() `
color: #000d1a;
`; */

const DropdownMenu = styled.div `
position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width:90vh;

background:#182335;
display:flex;
flex-direction:column;
hidth:100vh
@media only screen and (max-width: 768px) {
  width:100%;
  left:0;
}

`;
const DropdownLinkBox = styled.div `
display:grid;
grid-template-columns: 1fr 1fr;
@media only screen and (max-width: 768px) {
  display:flex;
  flex-direction:column;
  z-index:10 ;
}
`;
const DropdownLink = styled(Link)`
background-color: #fff;
text-decoration: none;
display: flex;

padding: 1rem;
align-content: center;
align-items: center;
justify-content: space-between;
text-transform: uppercase;
color: rgb(3,68,146);
margin: 1rem 1rem 1rem 1rem;
list-style:none;
 cursor:pointer;
 transition:0.2s ease-in;
h1{
  font-size: 3rem;  
}

&:hover{
padding: 2rem;
background-color: rgb(3,68,146);
margin: 1.3rem 1.3rem 1.3rem 1.3rem;
color:rgb(250,250,250);
}
.fas .fa-arrow-right:hover{
color:rgb(250,250,250);
}
i {

font-size: 4rem;
}
`;
const BtnWrap = styled.div `
 display:flex;
 justify-content: center;
`;

const TripikLogo = styled.img `
width:100%;
position:absolute;
  

  bottom: 2px;
`;
const CloseIcon = styled.img `

`;
const ReturnIcon = styled.img `

`;
const ReturnToFace = styled.div `
 display:flex;
 margin-left:2rem;
 align-items: center;
 h2{
   color:#fff;
   text-transform:uppercase;
 }
`;


/* var drop1 = require('../../assets/Dropicone/drop1.png'); */

const Dropbox = ({isOpen,toggle})=>{
  return (
    <div className="dropbox">
      {/* <div className="drop1">
        <DropImage src={process.env.PUBLIC_URL + '../../assets/Dropicone/drop1.png'} alt="icone" />
      </div>
      <div className="drop2">
      <DropImage src={process.env.PUBLIC_URL + '../../assets/Dropicone/drop2.png'} />
      </div>
      <div className="drop3">
      <DropImage src={process.env.PUBLIC_URL + '../../assets/Dropicone/drop3.png'} />
      </div>
      <div className="drop4">
      <DropImage src={process.env.PUBLIC_URL + '../../assets/Dropicone/drop4.png'} />
      </div> */}
      
      <div>
      <DropdownContainer isOpen={isOpen} /* onClick={toggle} */>
        <DropdownMenu>
          <ReturnToFace>
            <div><CloseIcon onClick={toggle} src={CloseBtnIcon}/></div>
            <div><ReturnIcon src={ReturnBtnIcon}/></div>
            <div><h2>RETURN TO THE Face of box</h2></div>
          </ReturnToFace>
          <DropdownLinkBox>
          {menuData.map((item,index)=>(
            <DropdownLink to={item.link} key={index}>
            <div>{item.title}</div>
            <div><i class="fas fa-arrow-right"></i></div>
            </DropdownLink>
           ))}
          </DropdownLinkBox>
        
            <TripikLogo src={TripikImg}/>
        </DropdownMenu>
        
    
      </DropdownContainer>
    </div>
    </div>

  )

}

export default Dropbox;