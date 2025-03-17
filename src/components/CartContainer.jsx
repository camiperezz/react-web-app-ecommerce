import { useCart } from '../context/cartContext'
import CartList from './CartList'
import { Link } from 'react-router'
import Button from './Button'

const CartContainer = () => {
    const { cart, clearCart, getTotal } = useCart()

    const total = getTotal()

    const handleClearCart = () => {
        clearCart()
    }

    return (
        <div className="container">
            <h1>Cart</h1>
            {cart.length == 0 ? 
                <>
                    <h2>Tu carrito esta vacío</h2>
                    <div className='cart-page-actions'>
                        <Button text="Vaciar carrito" variant='button-disabled'/>
                        <Button text="Ir al checkout" variant='button-disabled' />
                    </div>
                </>
                :
                <>
                    <CartList cart={cart} />

                    <span className='cart-page-total'>Total: ${total}</span>

                    <div className='cart-page-actions'>
                        <Button onClick={handleClearCart} text="Vaciar carrito" />

                        <Link to={`/checkout`}>
                            <Button text="Ir al checkout" />
                        </Link>
                    </div>
                </>
            }

            

            
        </div>
    )
    
}

export default CartContainer
