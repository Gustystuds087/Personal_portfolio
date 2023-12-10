import React, {useRef} from 'react'
import { useFrame} from '@react-three/fiber';
import { PerspectiveCamera, RenderTexture,Text } from '@react-three/drei';

const Cube = () => {
const textRef= useRef()

useFrame(state=>(textRef.current.position.x=Math.sin(state.clock.elapsedTime)*0.9))
  return (
    <mesh>
    <boxGeometry args={[4,4,4]} />
    <meshStandardMaterial color={"#F2C5E0"}>
      <RenderTexture attach="map">
        <PerspectiveCamera makeDefault position={[0,0,7]}/>
        <color attach="background" args={["#da4ea2"]}/>
        <Text ref={textRef} fontSize={1} color="#555">
          Swing me !
        </Text>
      </RenderTexture>
    </meshStandardMaterial>
  </mesh>
  )
}

export default Cube