import React from 'react'
import styled from "styled-components"
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import "../../public/img/style.css"

const Section = styled.div`
height:100vh;
scroll-snap-align: center;
display: flex;
flex-direction:column;
align-items: center;
justify-content: space-between; 

@media only screen and (max-width: 768px){
  height : 1500px;
}
`

const Container = styled.div`
height:100%;
scroll-snap-align: center;
width: 1200px;
display : flex;
justify-content: space-between;

 @media only screen and (max-width: 768px){
   flex-direction : column; 
   align-item:center;
   justify-content: center;
   width : 100%;
 }
 @media only screen and (min-width: 1900px){
  width : 1700px;
}

`

const Left = styled.div`
flex: 2;
display: flex;
flex-direction:column;
justify-content: center;
gap : 20px;

@media only screen and (max-width: 768px){
  flex : 1;
  align-items: center;
}
`

const Title = styled.h1`
font-size: 70px;

@media only screen and (max-width: 768px){
  text-align: center;
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

@media only screen and (max-width: 768px){
 padding : 20px;
 text-align: center;
}
`

const Button = styled.button`
background-color: #da4ea2;
color:white;
font-size: 500;
width: 100px;
padding: 10px;
border:none;
border-radius:5px;
cursor: pointer;
`

const Right = styled.div`
flex: 3;
position : relative;
animation : animate 2s infinite ease alternate;



@keyframes animate{
  to{
    transform: translateY(25px);
  }
}

@media only screen and (max-width: 768px){
  flex : 1;
  width: 100%;
}
`

const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position : absolute;
left: 0;
right: 0;
top : 0;
bottom: 0;
margin : auto;

@media only screen and (max-width: 768px){
  width : 300px;
  height: 300px;
}
`

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Think, Make, Solve.'],
    typeSpeed: 120,
    loop: Infinity,
    delayBetweenLoop: 3000,
  })

  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>
            <span>{text}</span>
            <span style={{ color: 'pink' }}><Cursor cursorStyle='|' /></span>
          </Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <SubtTitle> What I do.</SubtTitle>
          </WhatWeDo>
          <Desc>~ "I make websites come alive via strategic approach to website design and development that feels right for the person sitting in the front and guy sitting at the backend " ~</Desc>
        </Left>
        <Right>
          <Canvas camera={{ pov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={3.9}>
              <MeshDistortMaterial
                color="#695E93"
                attach="material"
                distort={0.7}
                speed={1.7}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/moon.png" style={{ position: "absolute", bottom: "50px" }} />
        </Right>
      </Container>
    </Section >
  )
}



export default Hero
