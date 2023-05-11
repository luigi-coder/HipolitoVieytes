// EJEMPLO DEL HOLA MUNDO
/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App"><div>
        <h1>Hola Mundo</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
 */

// EJEMPLO DE RELOJ
/* import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="logo-container">
        <img src={reactLogo} alt="React Logo" className="logo" />
        <img src={viteLogo} alt="Vite Logo" className="logo" />
      </div>
      <div className="clock">
        {time.toLocaleTimeString()}
      </div>
    </>
  )
}

export default App */


// EJEMPLO DE CONTADOR
import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    
    if(count === 0) return alert('No se puede restar mas');
    
    setCount(count - 1)
  }

  return (
    <div className="counter-container">
      <div className="counter">{count}</div>
      <div className="button-container">
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </div>
    </div>
  )
}

export default App
