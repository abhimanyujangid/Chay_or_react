import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{background:color}}></div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3  shadow-lg bg-white px-3 py-2 rounded-3xl'> 
        <button onClick={()=> setcolor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"red"}}>red</button>
        <button onClick={()=> setcolor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"green"}}>green </button>
        <button onClick={()=> setcolor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"blue"}}>blue</button>
        <button onClick={()=> setcolor("yellow")} className='outline-none px-4 py-1 rounded-full  shadow-lg' style={{background:"yellow"}}>yellow</button>
        <button onClick={()=> setcolor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"black"}}>black</button>
        </div>
      </div>
    </>
  )
}

export default App
