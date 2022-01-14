import React from 'react'
//threejs
import {Canvas} from '@react-three/fiber';

const ThreeScene = ({children}) => {
    return (
        <Canvas camera={{ fov: 35, zoom: 1.3, near: 1, far: 1000 }}>
            {children}
        </Canvas>
    )
}

export default ThreeScene
