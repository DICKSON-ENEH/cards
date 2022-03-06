import React from 'react'
import styled from 'styled-components'

const Down = ({ views, image, image1, number,scolor, percent}) => {
  return (
    <div><Boxes>
      <Wrapper>
        <Upside>
          <Views>
            {views}
          </Views>
          <Icon>
          
          <img src={image} alt="socials"></img>
          </Icon>
        </Upside>
        <Downn>
          <Fig>
            {number}
          </Fig>
          <Sidewrap>
            <Arrow>
              <img src={image1} alt ="arr"/>
            </Arrow>
            <Smalltext scolor={scolor}>
              {percent}
            </Smalltext >
          </Sidewrap>
        </Downn>
      </Wrapper>
        </Boxes>
        </div>
  )
}

export default Down

const Boxes = styled.div`
width:220px;
height:120px;
background:#eee;
margin:20px ;
border-radius: 5px;
display:flex;
justify-content:space-around;
/* align-items: center; */

`
const Wrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center ;
width:75%;


`
const Upside= styled.div`
margin-bottom: 30px;
display:flex;
justify-content: space-between;
width: 180px;
`
const Views = styled.div`
/* margin-right:40px; */
font-family: montserrat;



`
const Icon = styled.div`
/* margin-left:40px */
`
const Downn = styled.div`

display:flex;
justify-content: space-between;
width: 180px;
`
const Sidewrap = styled.div`
/* margin-left:70px */

`
const Arrow = styled.span`
`
const Fig = styled.div`
/* margin-right:60px; */
font-family: montserrat;
font-size: 20px;

`
const Smalltext = styled.span`
font-size:12px;
color:${({scolor})=>scolor}
`


