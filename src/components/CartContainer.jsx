import { useCart } from '../context/cartContext'
import { CartLineList } from './CartLineList'

export const CartContainer = () => {
    const { cart } = useCart()

    return (
        <div className="cart-page container">
            <h1>Cart</h1>
            {cart.length == 0 ? 
                <h2>Tu carrito esta vacío</h2>
                :
                <CartLineList cart={cart} />
            }
        </div>
    )
    

}
