import { useState } from 'react'
import Usercontext from './context/usercontext'
import './App.css'
import UsercontextProvider from './context/UsercontextProvider'
import Login from '../../bg_changer/bg changer/src/components/login'
import Profile from '../../bg_changer/bg changer/src/components/profile'

function App() {

  return (
    <UsercontextProvider>
      <h1>Jai Shree Krishna</h1>
      <Login/>
      <Profile/>
    </UsercontextProvider>
  )
}

export default App
