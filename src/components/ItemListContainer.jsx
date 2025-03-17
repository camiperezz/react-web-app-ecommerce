import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import { getProducts, getProductsByCategory } from "../firebase/db"
import ItemList from './ItemList'

function ItemListContainer () {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { nameCategory } = useParams()
    const [notFound, setNotFound] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        setNotFound(false)

        const fetchData = nameCategory ? getProductsByCategory(nameCategory) : getProducts()

        fetchData
            .then(res => {
                if (!res || res.length === 0) {
                    setNotFound(true)
                } else {
                    setItems(res)
                }
            })
            .catch(() => setNotFound(true))
            .finally(() => setLoading(false))
    }, [nameCategory])

    if (notFound) {
        navigate("/404", { replace: true })
        return null
    }

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