import { cartContext } from "./cartContext"
import { useState } from 'react'

function CartProvider( {children} ) {
    const [cart, setCart] = useState([])

    const getQty = () => {
        const quantities = cart.map(product => product.qty)
        const result = quantities.reduce((acc, current) => acc + current, 0)

        return result
    }

    const getTotal = () => {
        const prices = cart.map(product => product.price * product.qty)
        const total = prices.reduce((acc, current) => acc + current, 0)

        return total
    }

    const addToCart = (addedProduct) => {       

        setCart((prevCart) => {
            const existingProduct = prevCart.find((cartItem) => cartItem.id === addedProduct.id)
    
            if (existingProduct) {
                return prevCart.map((cartItem) =>
                    cartItem.id === addedProduct.id
                        ? { ...cartItem, qty: cartItem.qty + addedProduct.qty }
                        : cartItem
                )
            } else {
                return [...prevCart, addedProduct]
            }
        })
    }

    const removeItem = (productId) => {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== productId))
    }
    

    const clearCart = () => {
        setCart([])
    }
    
    return (
        <cartContext.Provider value={{ cart, getQty, getTotal, addToCart, removeItem, clearCart }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider