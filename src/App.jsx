import { useState } from 'react'
import './App.css'
import HeroPanel from './components/hero-panel'

function App() {

  return (
    <div className='App'>
      <div className='outer-main-container'>
        <div className='inner-main-container'>
          <h1>Vite + React</h1>
          <HeroPanel />
        </div>
      </div>
    </div>
  )
}

export default App
