import { useState } from 'react'
import './App.css'
//components
import WinBar from './components/WinBar'
import Filters from './components/Filters'

function App() {
  

  return (
    <div className='App'>
      <WinBar/>
      <Filters />
    </div>
  )
}

export default App
