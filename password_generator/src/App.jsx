import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [len, setlen] = useState(8)
  const [numallow, setnumallow] = useState(false)
  const [spchar, setspchar] = useState(false)
  const [password, setpass] = useState("")


  //Useref hook
  const passwordref = useRef(null)

  //usecallback:  talks about optimisation  
  const passwordgenerator = useCallback(() => {
    let passw = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numallow) str += "0123456789"
    if (spchar) str += "@!#$%^&*"
    for (let i = 1; i <= len; i++) {
      let chara = Math.floor(Math.random() * str.length + 1)
      passw+= str.charAt(chara)
    }
    setpass(passw)

  }, [len, numallow, spchar, setpass])

  const copypasswordtoclip = useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(5,1000); // selecting passowrd in range
    window.navigator.clipboard.writeText(password) //#####################
  },[password])


  // ########################  USEEFFECT HOOK ##############################
    useEffect(()=>{        // USEFFECT HOOK talks about dependencies on which function should change.
      passwordgenerator()
    }, [len, numallow , spchar, passwordgenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordref}
          />
          <button
            onClick={copypasswordtoclip}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-black'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={len}
              className='cursor-pointer'
              onChange={(e) => {setlen(e.target.value) }}
            />
            <label>Length: {len}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numallow}
              id='numberInput'
              onChange={() => {
                setnumallow((prev) => !prev)
              }}
            />
            <label htmlFor="numberinput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={spchar}
              id='charInput'
              onChange={() => {
                setspchar((prev) => !prev)
              }}
            />
            <label htmlFor="charinput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
