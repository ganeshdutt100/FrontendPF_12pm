import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

const ProductList = () => {
    const { addToCart } = useContext(CartContext)
    const products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mobile", price: 30000 },
        { id: 3, name: "HeadPhones", price: 2000 }
    ]
    return (
        <div>
            <h2>Products</h2>
            {products.map((p) => (
                <div key={p.id} >
                    <h4>{p.name} , {p.price}</h4>
                    <button onClick={() => addToCart(p)}>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

export default ProductList