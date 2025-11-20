import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './components/ToDoList'

function App() {
  const [count, setCount] = useState(20)

  return (
    <>
      {/* 
      <div className="card">
        <p>  count is {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count Button
        </button> 

      </div>*/}
      <ToDoList />

    </>
  )
}

export default App
