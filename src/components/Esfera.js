import React from 'react'
//three js


const Esfera = () => {
    return (
        <mesh>
            <sphereGeometry></sphereGeometry> 
            <meshStandardMaterial color="#00ff00" wireframe></meshStandardMaterial>
        </mesh>
    )
}

export default Esfera
