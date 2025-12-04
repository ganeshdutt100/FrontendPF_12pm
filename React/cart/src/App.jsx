import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CardProvider } from './context/CartContext'
import Cart from './components/Cart'
import ProductList from './components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardProvider>

        <div>
          <h1>Cart Context </h1>

          <ProductList />
          <Cart />
        </div>
      </CardProvider>


    </>
  )
}

export default App
