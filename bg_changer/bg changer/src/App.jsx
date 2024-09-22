import { useState } from 'react'
import './App.css'

function App() {
  let [color, setcolor] = useState("orange")


  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center" style={{ backgroundColor: color }}>
        {/* <button className="bg-white text-black font-bold py-2 px-4 rounded" onClick={toggleColor}>
          Colour Changer
        </button> */}
        <div className="w-80 h-20 bg-gray-200 border-2 border-gray-400 p-4 flex flex-row items-center justify-around">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={()=>setcolor("Blue")}>Blue</button>
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded" onClick={()=>setcolor("Green")}>Green</button>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded" onClick={()=>setcolor("Red")}>Red</button>
        </div>

      </div>
    </>
      
  )
}

export default App
