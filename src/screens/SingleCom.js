import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import Header from '../components/Header';
import styled, { css } from 'styled-components/macro';
import ComData  from '../data/ComData';



const Touch = styled(Link)` 


  background-color: rgb(3,68,146);
  text-decoration: none;
  display: flex;
 
  padding: 3.2rem;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  color: #fff;
  margin: 4rem 12rem 4rem 2rem;
  h1{
    font-size: 3rem;  
  }

&:hover{
  padding: 4rem;
  background-color: #fff;
  margin: 4rem 2rem 4rem 2rem;
  color:rgb(3,68,146);
}
.fas .fa-arrow-right:hover{
  color:rgb(3,68,146);
}
i {
  
  font-size: 4rem;
}
@media only screen and (max-width: 768px) {
  padding: 1.5rem;
  
  color: #fff;
  margin: 4rem 4rem 4rem 2rem;
  h1{
    font-size: 2rem;  
  }

&:hover{
  padding: 3rem;
  background-color: #fff;
  
  color:rgb(3,68,146);
}
.fas .fa-arrow-right:hover{
  color:rgb(3,68,146);
}
i {
  
  font-size: 4rem;
}
}

`;



function SingleCom(props) {
  return (
    <div className="comsingle">
      <div className="header_color">
      <Header/>
     </div>
      <Link className="returback" onClick={()=>{props.history.goBack();}}>
      <i style={{color:'#fff'}} class="fas fa-arrow-left"></i>
      </Link>
      <div className="contentcomsing">
        <h1>Production audiovisuelle</h1>
        <p>Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la cænogenèse de l"être dont il est question dans la cause ambiguë entendue à Moÿ, dans un capharnaüm qui, pense-t-il, diminue çà et là la qualité de son œuvre. Prouvez, beau juge, que le fameux sandwich au yak tue. L"île exiguë, Où l"obèse jury mûr Fête l"haï volapük, Âne ex æquo au whist, Ôtez ce vœu déçu. Vieux pelage que je modifie : breitschwanz ou yak ? Dès Noël où un zéphyr haï me vêt de glaçons würmiens, je dîne d’exquis rôtis de bœuf au kir à l’aÿ d’âge mûr & cætera ! Fougueux, j"enivre la squaw au pack de beau zythum. Ketch, yawl, jonque flambant neuve… </p>
      </div>
      <Touch className="touch">
      <div><h1>TOUCH with THE BOX</h1></div>
      <div>
        <i class="fas fa-arrow-right"></i>
        </div>
      </Touch >
      <Footer />
    </div>
  )
}

export default SingleCom
