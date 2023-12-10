import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import "../../public/img/style.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Desc= styled.div`
width : 400px;
height: 150px;
padding : 20px;
background-color: white;
border-radius: 10px;
position : absolute;
top : 19px;
right : 10px;

@media only screen and (max-width: 768px){
  width: 312px;
  left : 0;
  right: 0; 
  margin : auto;
}
`


const Work4 = () => {

  const [text] = useTypewriter({
    words: ['LATEST PROJECT UNDER DEVELOPMENT PHASE..'],
    typeSpeed: 30
  })


  return (
    <>
    <Desc>
     <b style={{fontSize:"24px",alignItems:"center"}}>{text}</b> 
    </Desc>

    <div>
        <Canvas camera={{ pov: 25, position: [5, 5, 5] }} style={{ position: "absolute", top: "110px", left: "29px" }}className="box">
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.92}>
            <MeshDistortMaterial
              color="#695E93"
              attach="material"
              distort={0.66}
              speed={1}
            />
          </Sphere>
        </Canvas>
        <img src="/img/construction.png" alt="" height="310px" style={{
          position: "absolute", bottom: "80px", left: "190px", animation: "animate 1s infinite ease alternate"
        }} className="cartoon"/>
      </div>
    </>
  )
}

export default Work4