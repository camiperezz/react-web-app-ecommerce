import { cartContext } from "./cartContext";
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

    const addToCart = (product) => { // to do: evitar productos duplicados
        setCart([...cart, product ])
    }

    // const addToCart = item => setCart({...cart, item})

    return (
        <cartContext.Provider value={{ addToCart, getQty, getTotal, cart }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider