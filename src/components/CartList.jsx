import CartLine from './CartLine'

function CartList ({ cart }) {

    return (
        <section>
            { cart.map(prod => <CartLine prod={prod} key={prod.id} />) }
        </section>
    )
}

export default CartList