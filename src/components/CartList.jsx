import CartLine from './CartLine'

function CartList ({ cart }) {

    return (
        <section className='cart-list'>
            { cart.map(prod => <CartLine prod={prod} key={prod.id} />) }
        </section>
    )
}

export default CartList