import React, { useEffect, useState } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Decal, Float, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from "../Loader"

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]); 

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[0,0,0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial 
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        <Decal 
        position={[0,0,1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        flatShading
        map={decal}
        />
        <Decal 
        position={[0,0,-1]}
        rotation={[2 * Math.PI, Math.PI, 6.25]}
        flatShading
        map={decal}
        />

      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    } 

    mediaQuery.addEventListener('change' , handleMediaQueryChange );

    return () => {
      mediaQuery.removeEventListener('change' , handleMediaQueryChange );
    }
  } , [] )

  if (isMobile) {
    return (
      <div className="flex justify-center items-center w-28 h-28 bg-[#f5f5f7] rounded-xl">
        <img 
          src={icon}
          alt="technology"
          className="w-16 h-16 object-contain"
        />
      </div>
    );
  }

  return(
    <Canvas
      frameloop='demand'
      gl={{
        preserveDrawingBuffer: true,
      }}
      dpr={[1, 1.5]}
      dispose={null}
    >

      <Suspense fallback= {<CanvasLoader />} >
        <OrbitControls 
          enableZoom = {false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Ball imgUrl={icon} />

      </Suspense>

      <Preload all />

    </Canvas>
  )
}

export default BallCanvas