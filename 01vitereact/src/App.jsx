import { useState } from 'react'
import './App.css'

function App() {
  

 let [counter,setcounter] = useState(0)

  const addvalue = () =>{
    if (counter < 22) {
      setcounter(counter+1)
      console.log(counter);
    }
 
  }

  const remove = () =>{
    if (counter > 0) {
      setcounter(counter - 1)
      console.log(counter);
    }
   
  }
  return (
    <>
    
     <h2>Chay our reat </h2>
     <h2>Counter value:{counter}</h2>
     <button onClick={addvalue}>Add calue</button>
     <br />
     <button onClick={remove}> remove valu  </button>
    </>
  )
}

export default App
