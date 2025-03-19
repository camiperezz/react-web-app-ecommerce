import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import { getProduct } from "../firebase/db"
import { useCart } from "../context/cartContext"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer () {
    const [detail, setDetail] = useState(null)
    const [loading, setLoading] = useState(true)
    const { idProduct } = useParams()
    const navigate = useNavigate()
    const [notFound, setNotFound] = useState(false)
    const { cart } = useCart()

    useEffect(() => {
        setLoading(true)
        setNotFound(false)

        getProduct(idProduct)
            .then(res => {
                if (!res || res.length === 0) {
                    setNotFound(true)
                } else {
                    setDetail(res)
                }
            })
            .catch(() => setNotFound(true))
            .finally(() => setLoading(false))
    }, [idProduct])

    if (notFound) {
        navigate("/404", { replace: true })
        return null
    }

    const isInCart = detail && cart.some(item => item.id === detail.id)

    return (
        <div>
            {loading ? (
                <div className="container loader-container">
                    <div className="loader"></div>
                </div>
            ) : (
                <ItemDetail detail={detail} isInCart={isInCart} />
            )}
        </div>
    )
}

export default ItemDetailContainer
