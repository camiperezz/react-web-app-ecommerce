import { useState } from "react"

function ItemCount () {

    const [count, setCount] = useState(0)

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleRemove = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className="qty-component">
            <button onClick={handleRemove}>-</button>
            <p>{count}</p>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}

export default ItemCount
