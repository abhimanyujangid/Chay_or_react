import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "~!@#$%^&*(()_)_+{}"
    }
    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllow, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    document.execCommand('copy')
  }, [password])

  // Generate password on initial render and when dependencies change
  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  return (
    <>
      <div className='my-5 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 text-orange-500 bg-gray-700'>
        <h1>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => setLength(Number(e.target.value))} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" checked={numberAllow} id='numberInput' className='cursor-pointer' onChange={() => setNumberAllowed(prev => !prev)} />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" checked={charAllowed} id='charInput' className='cursor-pointer' onChange={() => setCharAllowed(prev => !prev)} />
            <label>Char</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
