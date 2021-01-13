import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'


const Logo = styled(Link)` 

`;

function Combox({ComData}) {
  return (
   <>
    {ComData.map((comondata)=>(
      <Logo key={comondata._id} comondata={comondata} to={`/comsingle/${comondata._id}`} className="combtn">
      <div><h1>{comondata.title}</h1></div>
      <div>
        <i style={{color:'#fff'}} class="fas fa-arrow-right"></i>
        </div>
     </Logo>
    ))}
   </>
    
  )
}

export default Combox
