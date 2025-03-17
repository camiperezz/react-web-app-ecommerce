import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getProduct } from "../firebase/db"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer () {
    const [detail, setDetail] = useState(null)
    const [loading, setLoading] = useState(true)
    const { idProduct } = useParams()

    useEffect(() => {
        setLoading(true)
        getProduct(idProduct)
            .then(res => {
                setDetail(res)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [idProduct])

    return (
        <div>
            {loading ? (
                <div className="container loader-container">
                    <div className="loader"></div>
                </div>
            ) : (
                <ItemDetail detail={detail} />
            )}
        </div>
    )
}

export default ItemDetailContainer
