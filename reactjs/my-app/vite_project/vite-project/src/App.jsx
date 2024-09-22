import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [cnt, setCnt]= useState(15)
  // let cnt= 15;
  const addValue =()=>{
    if(cnt>=20) return cnt;
    // cnt+=1
    // setCnt(cnt+1)
    // setCnt(cnt+2)
    // setCnt(cnt+1)
    // setCnt(cnt+2)
    // setCnt(cnt+1)

    //#########
    setCnt((prevcnt)=> prevcnt+1)
    setCnt((prevcnt)=> prevcnt+1)
    setCnt((prevcnt)=> prevcnt+2)
    setCnt((prevcnt)=> prevcnt+1)
  }
  // Hook yaha padhe mainly ui rendering ke liye use krte
  const removeValue =()=>{
    if(cnt<=0) return cnt;
    cnt-=1
    setCnt(cnt)
  }

  return (
    <>
       <h1>jai shree Krishna</h1>
       <h2>counter value : {cnt} </h2>
       <button onClick={addValue}>Add Value</button>
       <br />
       <br />
       <button onClick= {removeValue}>Remove Value</button>
    </>
  )
}

export default App
