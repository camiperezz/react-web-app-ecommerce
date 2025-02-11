import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemList from './ItemList'

function ItemListContainer () {
    const [items, setItems] = useState([])
    const { nameCategory } = useParams()    
   

    useEffect(() => {
        const allProducts = `https://dummyjson.com/products`
        const byCategory = `https://dummyjson.com/products/category/${nameCategory}`

        fetch(nameCategory ? byCategory : allProducts)
            .then(res => res.json())
            .then(res => setItems(res.products))
            
    }, [nameCategory])

    return (
        <ItemList items={items} />
    )
}

export default ItemListContainer