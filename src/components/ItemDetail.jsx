import ItemCount from './ItemCount'

function ItemDetail({ detail, isInCart }) {
    return (
        <section className='container pdp'>
            <div className='pdp-img-container'>
                <img src={detail.image} alt={detail.name} />
            </div>
            <div className='pdp-content'>
                <span className='category-phill'>{detail.category}</span>
                <h2>{detail.name}</h2>
                <p>{detail.description}</p>
                <p className='item-price'>${detail.price}</p>
                {isInCart && <p className='item-added'>Este producto ya lo agregaste al carrito</p>}
                <ItemCount product={detail} />
            </div>
        </section>
    )
}

export default ItemDetail