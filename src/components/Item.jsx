import { Link } from 'react-router'
import Button from './Button'

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
                    <Button className='button-styles' text="Ver mas" />
                </div>
            
            </article>
        </Link>
    )
}

export default Item
