import Item from './Item'

function ItemList ({items}) {

    return (
        <section className='item-list container'>
            { items.map(product => <Item product={product} key={product.id} />) }
        </section>
    )
}

export default ItemList
