import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getProducts, getProductsByCategory } from "../firebase/db"
import ItemList from './ItemList'

function ItemListContainer () {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { nameCategory } = useParams()

    useEffect(() => {
        setLoading(true)
        const fetchData = nameCategory ? getProductsByCategory(nameCategory) : getProducts()
        
        fetchData.then(res => {
            setItems(res)
        }).finally(() => {
            setLoading(false)
        })

    }, [nameCategory])

    return (
        <div>
            {loading ? (
                <div className="container loader-container">
                    <div className="loader"></div>
                </div>
            ) : (
                <ItemList items={items} />
            )}
        </div>
    )
}

export default ItemListContainer
