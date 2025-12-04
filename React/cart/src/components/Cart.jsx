
import react, { useContext } from 'react'
import CartContext from '../context/CartContext'
import CartItem from './CartItem'


const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>No Item in Cart</p>
            ) : (
                cart.map((item) => <CartItem key={item.id} item={item} />)
            )}
        </div>
    )
}

export default Cart