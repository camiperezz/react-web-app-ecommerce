import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer () {
 
    const [detail, setDetail] = useState()
    const { idProduct } = useParams()    

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${idProduct}`)
            .then(res => res.json())
            .then(res => setDetail(res))
    }, [idProduct])

    return (
        <ItemDetail detail={detail} />
    )
}

export default ItemDetailContainer