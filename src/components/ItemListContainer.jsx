import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getProducts, getProductsByCategory } from "../firebase/db"
import ItemList from './ItemList'

function ItemListContainer () {
    const [items, setItems] = useState([])
    const { nameCategory } = useParams()    
   
    useEffect(() => {
        if (nameCategory) {
            getProductsByCategory(nameCategory).then(res => setItems(res))
        } else {
            getProducts().then(res => setItems(res))
        }
    }, [nameCategory])

    return (
        <ItemList items={items} />
    )
}

export default ItemListContainer