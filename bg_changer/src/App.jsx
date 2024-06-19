import { useState } from 'react'

import './App.css'

function App() {

let [color,setcolor] = useState("green")

  return (
    
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor:color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center bg-white shadow-lg px-3 py-2 rounded-3xl gap-6'>
            <button onClick={()=>setcolor("red")}
            className="outline-none px-4 py-1 
            rounded-full shadow-lg text-black"
             style={{backgroundColor:"red"}}>red</button>
            <button onClick={()=>setcolor("white")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor:"white"}} >white</button>
            <button onClick={()=>setcolor("olive")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor:"olive"}} >olive</button>
            <button onClick={()=>setcolor("pink")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor:"pink"}} >pink</button>
            <button onClick={()=>setcolor("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor:"yellow"}}>yellow </button>
            <button onClick={()=>setcolor("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor:"blue"}} >blue</button>
          </div>
        
        
        </div>
      </div>
    
  )
}

export default App
