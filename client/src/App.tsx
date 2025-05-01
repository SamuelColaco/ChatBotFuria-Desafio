import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Chat } from './components/Chat/Chat'

function App() {

  return (
    <div>
      <Header />
      <Chat />
    </div>
  )
}

export default App
