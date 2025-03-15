import { useCart } from '../context/cartContext'
import CartList from './CartList'
import { Link } from 'react-router'
import Button from './Button'

const CartContainer = () => {
    const { cart, clearCart } = useCart()

    const handleClearCart = () => {
        clearCart()
    }

    return (
        <div className="cart-page container">
            <h1>Cart</h1>
            {cart.length == 0 ? 
                <h2>Tu carrito esta vacío</h2>
                :
                <CartList cart={cart} />
            }

            <div className='cart-page-actions'>
                <Button onClick={handleClearCart} text="Vaciar carrito" />

                <Link to={`/checkout`}>
                    <Button text="Ir al checkout" />
                </Link>
            </div>

            
        </div>
    )
    
}

export default CartContainer
