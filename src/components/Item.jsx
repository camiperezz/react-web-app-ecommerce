import { Link } from 'react-router'

function Item ({ product }) {

    return (
        <article>
            <Link to={`/item/${product.id}`}>
                <img src={product.thumbnail} />
                <div>
                    <h2>{product.title}</h2>
                    <span>{product.category}</span>
                    <p>{product.description}</p>
                </div>
            </Link>
            
        </article>
    )
}

export default Item
