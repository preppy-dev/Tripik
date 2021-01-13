import React from "react";
import styled, { css } from 'styled-components/macro'

/* import drop1 from '../../assets/Dropicone/drop1.png' */
/* import drop2 from '../../assets/Dropicone/drop2.png'
import drop3 from '../../assets/Dropicone/drop3.png'
import drop4 from '../../assets/Dropicone/drop4.png' */

const DropImage = styled.img`
`;

/* var drop1 = require('../../assets/Dropicone/drop1.png'); */

const Dropbox = ()=>{
  return (
    <div className="dropbox">
      <div className="drop1">
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
      </div>
    </div>

  )

}

export default Dropbox;