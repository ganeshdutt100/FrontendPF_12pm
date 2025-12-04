import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(CartContext)
    return (
        <div>
            <h4>{item.name} - {item.price}</h4>
            <button onClick={() => removeFromCart(item.id)} >Remove</button>
        </div>
    )
}

export default CartItem