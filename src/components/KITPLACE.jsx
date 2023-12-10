import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import "../../public/img/style.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Desc = styled.div`
width : 400px;
height: 200px;
padding : 20px;
background-color: white;
border-radius: 10px;
position : absolute;
top : 19px;
right : 10px;

@media only screen and (max-width: 768px){
  width: 312px;
  height:180px;
  left : 0;
  right: 0; 
  margin : auto;
}
`


const KITPLACE = () => {
  const [text] = useTypewriter({
    words: ['KITPLACE is a website designed for college students and faculty members to access current and past placement data. Users can check the current status of the placement scenarios and view past records. The platform aims to provide a secure and convenient way for students and faculty members to stay informed about the colleges placement programs.'],
    typeSpeed: 20
  })

  return (
    <>
      <Desc>
        <b style={{ fontSize: "17px", alignItems: "center" }}>&#x2022;{text}</b>
      </Desc>

      <div>
        <Canvas camera={{ pov: 25, position: [5, 5, 5] }} style={{ position: "absolute", top: "149px", left: "38px" }} className="box">
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
        <img src="/img/kitplace.png" alt="" height="340px" style={{
          position: "absolute", bottom: "39px", left: "200px", animation: "animate 1s infinite ease alternate"
        }} className="cartoon" />
      </div>
    </>


  )
}

export default KITPLACE