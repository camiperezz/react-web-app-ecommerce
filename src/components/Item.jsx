import { Link } from 'react-router'

function Item ({ product }) {

    return (
        <Link to={`/item/${product.id}`}>
            <article>
                <img src={product.image} />
                <div>
                    <h2>{product.name}</h2>
                    <span className='category-phill'>{product.category}</span>
                    <p>{product.description}</p>
                    <p className='item-price'>${product.price}</p>
                    <button className='button-add-to-cart'>+ Agregar al carrito</button>
                </div>
            
            </article>
        </Link>
    )
}

export default Item
