import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(Counter + 1)
  }

  const removeValue = () => {
    setCounter(Counter - 1)
  }

  return (
    <>
      <h1>React with Anjali</h1>
      <h2>Counter value: {Counter}</h2>
      <button
      onClick={addValue}
      >increase value</button>
      <br />
      <button
      onClick={removeValue}
      >decrease value</button>
    </>
  )
}

export default App
