import React from 'react'
import { useState } from 'react'

import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'

const App = () => {
  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGameplay=()=>{
    setisGameStarted((prev)=>!prev);
  }  
  return (
    <div>
       { isGameStarted? <GamePlay/> :<StartGame toggle={toggleGameplay}/> }
    </div>
  )
}



export default App