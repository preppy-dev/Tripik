import React,{useState,useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro'

const HeroSection = styled.section`
 height:100vh;
 max-height:1100px;
 position:relative;
 overflow:hidden;
`;

const HeroWrapper = styled.div`
height:100%;
width:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
position:relative;
`;

const HeroSlide = styled.div`
z-index:1;
width:100%;
height:100%;
`;
const HeroSlider = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height: 100%;
display:flex;
/* justify-content: */
align-items:center;
&::before{
  content:'';
  position:absolute;
  z-index:2;
  width:100%;
  height: 100vh;
  bottom:0vh;
  left:0;
  overflow:hidden;
  opacity: 0.4;
  background:linear-gradient(0deg,
  rgba(0, 0, 0, 0.2) 0%,
  rgba(0, 0, 0, 0.2) 50%,
  rgba(0, 0, 0, 0.6) 100%,
  );
}
`;
const HeroImage = styled.img`
position:absolute;
top:0;
left:0;
width:100vw;
height: 100vh;
object-fit:cover;
`;

const HeroContent = styled.div`
position:relative;
z-index:10 ;
display: flex;
flex-direction:column;
max-width:1600px;
width: calc(100%-100px);
color:#fff;
h1{
  font-size: clamp(7.6rem, 10vw, 4rem);
  font-weight:400;
  text-align: left;
  margin-left:5rem;
  word-break: keep-all;
  width:69.9vh;
  }
  @media only screen and (max-width: 768px) {
    h1{
      font-size: clamp(5rem, 8vw, 42rem);
      font-weight:400;
      text-align: left;
      margin-left:2rem;
      word-break: keep-all;
      width:69.9vh;
      }
  }
  p{
    margin-bottom:1.2rem;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
  }
`;
/* const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem;
`; */

const SliderButtons =styled.div `
position:absolute;
bottom:50px;
right:50px;
display:flex;
z-index:10;
`;
const arrowButton = css`
height:50px;
width:50px;
color:#fff;
cursor:pointer;
background:#000d1a;
border-radius:50px;
padding:10px;
margin-right:1rem;
user-select:none;
transition:0.3s;
&:hover{
background:#cd853f;
transform:scale(1.05);
}
`;
/* 
const PrevArrow = styled()`
${arrowButton}
`;
const NextArrow = styled()`
${arrowButton}
`; */

const SocialsAction = styled.div `
display:flex;

`;

function Hero({slides}) {
 const [current, setCurrent] = useState(0);
 const length = slides.length;
 const timeout = useRef(null);

 useEffect(() => {
  const nextSlide = ()=>{
    setCurrent(current=>(current === length -1 ? 0 : current +1 ))
  };

  timeout.current = setTimeout(nextSlide,3000);
  return function(){
    if (timeout.current){
      clearTimeout(timeout.current)
    }
  }
 }, [current,length])

 const nextSlide = ()=>{
  if (timeout.current){
    clearTimeout(timeout.current)
  }

   setCurrent(current=== length - 1 ? 0 : current + 1)
 }
 const prevSlide = ()=>{
  if (timeout.current){
    clearTimeout(timeout.current)
  }
   setCurrent(current=== 0 ? length -1 : current  - 1)
 }
  
 if(!Array.isArray(slides)||slides.length <=0){
   return null;
 }

  return (
    <div>
      <HeroSection>
        <HeroWrapper>
      {slides.map((slide, index)=>(
      <HeroSlide key={index}>
        {index === current && (
         <HeroSlider>
         <HeroImage src={slide.image} alt={slide.alt}/>
         <HeroContent>
           <h1>{slide.title}</h1>
         </HeroContent>
         </HeroSlider>
        )}
        {/* <SocialsAction>
           <div>Suivez-nous </div>
           <div><img src="" alt=""/></div>
           <div>
           <Link>
           <img src="" alt=""/>
           </Link>
           <Link>
           <img src="" alt=""/>
           </Link>
           <Link>
           <img src="" alt=""/>
           </Link>
           </div>
         </SocialsAction> */}
      </HeroSlide>
      ))}
         
        </HeroWrapper>
      </HeroSection>
    </div>
  )
}

export default Hero