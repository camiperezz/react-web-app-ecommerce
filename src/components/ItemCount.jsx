import { useState } from "react"
import { useCart } from "../context/cartContext"
import Button from "./Button"

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
                <Button onClick={handleRemove} text="-" />
                <p>{count}</p>
                <Button onClick={handleAdd} text="+" />
            </div>
            <Button onClick={handleAddToCart} className='button-styles' text="Agregar al carrito" />
        </>
    )
}

export default ItemCount
