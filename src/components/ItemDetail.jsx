import ItemCount from './ItemCount'

function Item ({ detail }) {

    return (
        <section>
            <img src={detail?.thumbnail} />
            <div>
                <h2>{detail?.title}</h2>
                <span>{detail?.category}</span>
                <p>{detail?.description}</p>
            </div>
            <ItemCount />
        </section>
    )
}

export default Item
