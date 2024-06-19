import { useState } from 'react'

import './App.css'

function App() {
  let [counter,setcounter]=useState(1)
//let counter =15
 function addvalue(){
    counter=counter+3
   
    setcounter(counter) 
   // setcounter(prevcounter=>prevcounter+3) 
    // setcounter(prevcounter=>prevcounter+1)  
    // setcounter(prevcounter=>prevcounter+1) 
    console.log("value added "+counter)
  }
  function removevalue(){
    counter=counter-1
    setcounter(counter)
  }


  return (
    <>
     <h1>{counter}</h1>
     <button onClick={addvalue}>Add Value</button><br></br><br></br>
     <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
