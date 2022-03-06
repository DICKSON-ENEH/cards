import React from 'react'
import styled from 'styled-components'
import FirstBoxes from '../Body/Body'
import Header from '../Header/Header'
import Center from '../Center/Center'
import Down from '../Down/Down'
import pic from '../images/icon-facebook.svg'
import pic1 from '../images/icon-up.svg'
import pic2 from  '../images/icon-twitter.svg'
import pic3 from '../images/icon-instagram.svg'
import pic4 from '../images/icon-youtube.svg'
import pic5 from '../images/icon-down.svg'

const Home = () => {
  return (
    <div>
      <Header/>

    <Components>
  <FirstBoxes image = {pic} text= "@nathanf" image1={pic1} largenumber="1987" success="FOLLOWERS" smallnumber="12 Today" scolor="#1EB589" change="solid 2px blue"
  />
  <FirstBoxes image = {pic2} text= "@nathanf" image1={pic1} largenumber="1044" success="FOLLOWERS" smallnumber="99 Today" scolor="#1EB589" change="solid 2px skyblue"/>
  <FirstBoxes image = {pic3} text= "@nathanf" image1={pic1} largenumber="11k" success="FOLLOWERS" smallnumber="1099 Today" scolor="#1EB589" change="solid 2px orangered"/>
  <FirstBoxes image = {pic4} text= "@nathanf" image1={pic5}  largenumber="1987" success="FOLLOWERS" smallnumber="12Today" scolor='red' change="solid 2px red"/>
    </Components>
    <Center/>
<Components>
    <Down views = 'page views' image={pic} number ="87" image1={pic1} percent ="3%" scolor ="green"/>
    <Down views = 'Likes' image={pic} number ="52" image1={pic5} scolor ="red"percent ="2%"/>
    <Down views = 'Likes' image={pic3} number ="54625" image1={pic1} percent ="2257%"  scolor ="green"/>
    <Down views = 'profile views' image={pic3} number ="52k" image1={pic1} percent ="1375%"scolor ="green"/>
    </Components>
    <Components>
    <Down views = 'Retweets' image={pic2} number ="117" image1={pic1} percent ="303%"scolor ="green"/>
    <Down views = 'Likes' image={pic2} number ="507" image1={pic1} percent ="3%"scolor ="green"/>
    <Down views = 'Likes' image={pic4} number ="107" image1={pic5} percent ="3%"scolor ="red"/>
    <Down views = 'Total views' image={pic4} number ="1407" image1={pic5} percent ="3%"scolor ="red"/>
    </Components>
    </div>
  )
}

export default Home

const Components = styled.div`
display: flex;
justify-content: center;
align-items: center;

/* margin:20px */
`