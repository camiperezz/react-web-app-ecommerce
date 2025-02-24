import CartLine from './CartLine'

export function CartLineList ({ cart }) {

    return (
        <section>
            { cart.map(prod => <CartLine prod={prod} key={prod.id} />) }
        </section>
    )
}