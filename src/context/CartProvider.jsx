import { cartContext } from "./cartContext"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

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
    
            toast("Producto agregado al carrito!", {
                position: "bottom-right",
                theme: "dark"
            });
            
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
        toast("Producto eliminado del carrito!", {
            position: "bottom-right",
            theme: "dark"
        });
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== productId))
    }
    

    const clearCart = () => {
        setCart([])
        toast("Carrito vaciado!", {
            position: "bottom-right",
            theme: "dark"
        });
    }
    
    return (
        <>
            <ToastContainer />
            <cartContext.Provider value={{ cart, getQty, getTotal, addToCart, removeItem, clearCart }}>
                {children}
            </cartContext.Provider>
        </>
    )
}

export default CartProvider