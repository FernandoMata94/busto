import React from 'react'
//threejs
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {useLoader} from '@react-three/fiber';
import model from '../assets/busto.glb';

const Model = () => {
    const geom = useLoader(GLTFLoader,model)
    return (
        <primitive object={geom.scene}>
            
        </primitive>
    )
}

export default Model
