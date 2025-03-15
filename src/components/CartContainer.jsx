import { useCart } from '../context/cartContext'
import { CartLineList } from './CartLineList'
import { Link } from 'react-router'
import Button from './Button'

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

            <Link to={`/checkout`}>
                    <Button text="Ir al checkout" />
            </Link>
        </div>
    )
    

}
