import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getProduct } from "../firebase/db"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer () {
 
    const [detail, setDetail] = useState()
    const { idProduct } = useParams()

    useEffect(() => {
        getProduct(idProduct).then(res => setDetail(res))
    }, [idProduct])

    return (
        <ItemDetail detail={detail} />
    )
}

export default ItemDetailContainer