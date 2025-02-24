import { cartContext } from "./cartContext";
import { useState } from 'react'

function CartProvider( {children} ) {
    const [cart, setCart] = useState([])

    const addToCart = (product) => { // to do: evitar productos duplicados
        setCart([...cart, product ])
    }

    const getQty = () => {
        const quantities = cart.map(product => product.qty)
        const result = quantities.reduce((acc, current) => acc + current, 0)

        return result
    }

    return (
        <cartContext.Provider value={{ addToCart, getQty, cart }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider