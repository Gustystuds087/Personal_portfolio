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
  height:267px;
  left : 0;
  right: 0; 
  margin : auto;
}
`

const SecureUs = () => {

  const [text] = useTypewriter({
    words: ['SecureUs is a website that allows users to easily store and manage their important cards, such as warranty cards and green cards for vehicles. The website provides a user-friendly interface that allows users to add and save new cards, along with the important expiry dates associated with each card. The platform also sends timely email and SMS reminders to users, helping them to stay informed and organized about upcoming expiry dates. Overall, SecureUs aims to provide a secure and convenient solution for users who need to keep track of important card expiry dates.'],
    typeSpeed: 20
  })



  return (
    <>
      <Desc>
      &#x2022; <span style={{ fontSize: "15px", alignItems: "center" , fontWeight:"bold"}}>{text}</span>
      </Desc>
      <div>
        <Canvas camera={{ pov: 25, position: [5, 5, 5] }} style={{ position: "absolute", top: "142px", left: "28px" }} className="box">
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
        <img src="/img/secureus.png" alt="" height="400px" style={{
          position: "absolute", bottom: "14px", left: "240px", animation: "animate 1s infinite ease alternate"
        }} className="cartoon" />
      </div>
    </>
  )
}

export default SecureUs