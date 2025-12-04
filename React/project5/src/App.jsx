import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/Parent'
import UserContext from './context/UserContext'
// import ParentFile from './propsDrillingcomponents/ParentFile'

function App() {
  const [count, setCount] = useState(0)
  const userData = {
    name: "Sonu",
    course: "FS"

  }
  return (
    <>
      <UserContext.Provider value={userData}>
        <Parent />

      </UserContext.Provider>


      {/* <ParentFile username={username} /> */}
    </>
  )
}

export default App
