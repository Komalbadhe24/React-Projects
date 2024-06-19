
import { useState ,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {

const[length , setlength]= useState(8)
const[numberallowed,setnumberallowed]=useState(false)
const[charallowed,setcharallowed]=useState(false)
const[Password,setpassword]=useState()
//useref hook
const passwordref=useRef(null)
const copypwdtoclipboard=useCallback(()=>{
  passwordref.current?.select();
  passwordref.current?.setSelectionRange(0,9);
  window.navigator.clipboard.writeText(Password)
},[Password])
const passwordgenerator = useCallback(()=>{

  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numberallowed) str +="0123456789"
  if(charallowed) str +="!@#$%^&*()?}{~"
for(let i=0;i<=length;i++){
  let char =Math.floor(Math.random()*str.length+1)
  pass +=str.charAt(char)
}
setpassword(pass)
},[length,numberallowed,
  charallowed,setpassword])
useEffect(()=>{
  passwordgenerator()
},[length,numberallowed,charallowed,
  passwordgenerator])

  return (
    <>
  
    <div className='w-full max-w-md shadow-md mx-auto my-5  px-8 rounded-xl text-orange-500
     bg-gray-700 '>
      <h1 className='text-white text-2xl text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={Password} 
        className='outline-none w-full py-1 px-3'
         placeholder='password' 
        ref={passwordref}
         readOnly/>
     <button
     onClick={copypwdtoclipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
       
      </div>
      <div className='flex text-sm gap-x-2'>
       <div className='flex items-center gap-x-1'>
        <input type="range" 
        min={6} 
        max={100} 
        value={length} 
        className='cursor-pointer'
        onChange={(e)=>{
          setlength(e.target.value)
        }}
        />
        <label>Length:{length}</label>
        </div> 
        <div className='flex gap-x-1 items-center'>
          <input
          type="checkbox"
          defaultChecked={numberallowed}
          id="numberInput"
          onChange={()=>{
            setnumberallowed((prev)=>!prev)
          }}
          />
          <label>Numbers</label>

        </div>
        <div className='flex gap-x-1 items-center'>
          <input
          type="checkbox"
          defaultChecked={charallowed}
          id="charInput"
          onChange={()=>{
            setcharallowed((prev)=>!prev)
          }}
          />
          <label>Characters</label>

        </div>

      </div>
     </div>
     </>
  )
}

export default App
