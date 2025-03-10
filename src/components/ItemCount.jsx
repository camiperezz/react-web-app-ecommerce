import { useState } from "react"
import { useCart } from "../context/cartContext"

function ItemCount ({ product }) {

    const [count, setCount] = useState(1)
    const { addToCart } = useCart()

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleRemove = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleAddToCart = () => {
        addToCart({ ...product, qty: count })
        setCount(1)
    }

    return (
        <>
            <div className="qty-component">
                <button onClick={handleRemove}>-</button>
                <p>{count}</p>
                <button onClick={handleAdd}>+</button>
            </div>
            <button onClick={handleAddToCart} className='button-add-to-cart'>+ Agregar al carrito</button>
        </>
    )
}

export default ItemCount
