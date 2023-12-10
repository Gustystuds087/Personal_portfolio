import React from 'react'
import styled from "styled-components"
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';
import Skills from './Skills';
import "../../public/img/style2.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Section = styled.div`
height:100vh;
scroll-snap-align: center;
display: flex;
justify-content: center; 
`

const Container = styled.div`
height:100vh;
scroll-snap-align: center;
width: 1200px;
display : flex;
justify-content: space-between;

@media only screen and (min-width: 1900px){
  width : 1700px;
}

`

const Left = styled.div`
flex: 1;

@media only screen and (max-width: 768px){
display : none;
}

`

const Title = styled.h1`
font-size: 70px;

@media only screen and (max-width: 768px){
  font-size: 40px;
}
`

const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 5px;
`

const Line = styled.img`
height: 5px;
`

const SubtTitle = styled.h2`
color: #da4ea2;
`

const Desc = styled.p`
font-size: 24px;
color: lightgray;
`

const Button = styled.button`
background-color: #da4ea2;
color:white;
font-size: 500;
width: 90px;
padding: 5px;
border:none;
border-radius:5px;
cursor: pointer;
`

const Right = styled.div`
flex: 1;
display: flex;
flex-direction:column;
justify-content: center;
gap : 20px;

@media only screen and (max-width: 768px){
  align-items : center;
   text-align : center;
}

`


const Who = () => {

  const [text] = useTypewriter({
    words:[' Think outside the square space.'],
    typeSpeed: 120,
    loop: Infinity,
    delayBetweenLoop: 3000,
  })

  return (
    <Section > 
      <Container>
        <Left>
          <Canvas camera={{ pov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={2} />
            <directionalLight position={[3, 2, 1]} /> 
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title className='title'>
           <span>{text}</span>
           <span style={{color:'pink'}}><Cursor cursorStyle="|"/></span>
          </Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <SubtTitle> Who AM I.</SubtTitle>
          </WhatWeDo>
          <Desc><Skills/></Desc>
        </Right>
      </Container>
    </Section>
  )
}



export default Who
