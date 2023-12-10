import React, {useRef} from 'react'
import { useFrame} from '@react-three/fiber';
import { PerspectiveCamera, RenderTexture,Text } from '@react-three/drei';


const Cube2 = () => {
const textRef= useRef()

useFrame(state=>(textRef.current.position.x=Math.sin(state.clock.elapsedTime)*0.9))
  return (
    <mesh>
    <boxGeometry args={[2,2,2]} />
    <meshStandardMaterial color={"#F2C5E0"}>
      <RenderTexture attach="map">
        <PerspectiveCamera makeDefault position={[0,0,5]}/>
        <color attach="background" args={["#da4ea2"]}/>
        <Text ref={textRef} fontSize={3} color="#555">
          :)
        </Text>
      </RenderTexture>
    </meshStandardMaterial>
  </mesh>
  )
}

export default Cube2