import React from 'react'
import styled from 'styled-components'

const Body = ({image, text, largenumber, image1, smallnumber,change,success,scolor}) => {
  return (
      <div>
     
    <FirstBoxes change={change}>
     <Wrapper>
      <Icontextwrap>
        <Icon>
          <img src={image} alt ="anicon"/>
        </Icon>
        <Text>{text}</Text>
      </Icontextwrap>
      <Figs>{largenumber}</Figs>
      <Follow>{success}</Follow>

      <Lastwrap>
        <SmallIcon>
          <img src= {image1} alt ="an arrow"/>
          <Smalltext scolor={scolor}>
            {smallnumber}
          
          </Smalltext>
        </SmallIcon>
      </Lastwrap>
     </Wrapper>
    </FirstBoxes>
    </div>
  )
}

export default Body

const FirstBoxes = styled.div`
width:220px;
height:200px;
background:#eee;
margin:20px;
border-radius: 5px;
display:flex;
justify-content:center ;
align-items: center;
border-top: ${({change})=>change };

position: relative;
top: 70px;
`
const Wrapper= styled.div`
display:flex;
flex-direction: column;
align-items: center;
`
const Text= styled.div`
font-size:15px;
`
const Icon = styled.div`
width:27px;
height:27px
`

const Icontextwrap= styled.div`
display:flex;
justify-content:space-between;

`
const Figs = styled.div`
font-weight:bold;
font-size:3rem;
`
const Follow= styled.div`
font-family:montserrat ;
`
const Lastwrap = styled.div`

margin: 5px;
`
const SmallIcon= styled.span`
img{
width:12px
}
margin-right:4px
`
const Smalltext = styled.span`
font-size:12px;
color:${({scolor})=>scolor};
margin-left:4px;



`