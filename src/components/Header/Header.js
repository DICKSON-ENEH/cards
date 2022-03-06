import React from 'react'

import styled from 'styled-components'

const Header = () => {
  return (
    <Div>
      <Wrap>

      <Topic>
            Social media Dashboard
        </Topic>
        <Darkwrap>
        <Dark>
          Dark mode
        </Dark>
        <input type ="radio"/>
        </Darkwrap>
        
        
      </Wrap>
      <Subt>
          Total Followers:23,004
        </Subt>
       
    </Div>
  )
}

export default Header

const Topic = styled.span`
font-style:poppins ;
font-weight:bold;
font-size: 2rem;
margin-left: 100px;
`
const Subt = styled.div`
margin-left: 100px;
font-style:poppins;
font-weight:600;
position: absolute;
top:190px;


`
const Wrap = styled.span`
display:flex;
align-items: center;
justify-content:space-between;
position: absolute;
top:150px;
`
const Div = styled.div`
background: #eee;
height: 350px;
position: absolute;
bottom: 450px;
width: 90%;
left: 80px;
border-radius: 20px;
`
const Darkwrap = styled.span`
margin-left: 550px;

`
const Dark = styled.span``