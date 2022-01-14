import Esfera from './components/Esfera';
import React, {Suspense} from 'react'
import ThreeScene from './components/ThreeScene';
import Model from './components/Model';
//threedrei
import { OrbitControls,Stars } from '@react-three/drei';


function App() {

  return (
   <>   
   <ThreeScene>
     <color attach='background' args={['hotpink']} />
     <Esfera/>
     
     <ambientLight />
     <OrbitControls autoRotate/>
     <Stars></Stars>
     <Suspense fallback={null}>
      <Model/>
     </Suspense>
     
   </ThreeScene>
   </>
  )
}


export default App;
