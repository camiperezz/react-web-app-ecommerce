import ItemCount from './ItemCount'

function Item ({ detail }) {

    return (
        <section className='container pdp'>
            <div className='pdp-img-container'>
                <img src={detail?.thumbnail} />
            </div>
            <div className='pdp-content'>
                <span className='category-phill'>{detail?.category}</span>
                <h2>{detail?.title}</h2>
                <p>{detail?.description}</p>
                <p className='item-price'>${detail?.price}</p>
                <ItemCount />
                <button className='button-add-to-cart'>+ Agregar al carrito</button>
            </div>
        </section>
    )
}

export default Item
