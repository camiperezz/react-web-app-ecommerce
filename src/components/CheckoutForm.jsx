import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useCart } from '../context/cartContext'
import { serverTimestamp } from 'firebase/firestore'
import { createOrder } from '../firebase/db'
import { useNavigate } from 'react-router'
import Input from './Input'
import Button from './Button'

function CheckoutForm () {
    const { cart, getTotal, clearCart } = useCart()
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)    

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const phone = form.phone.value

        const order = {
            items: cart,
            user: { userName: name, email, phone },
            time: serverTimestamp(),
            total: getTotal()
        }

        const orderId = await createOrder(order)

        clearCart()

        MySwal.fire({
            title: <p>Gracias por tu compra</p>,
            text: `El ID de tu orden es ${orderId}`
        }).then(() => navigate('/'))
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input labelText="Email" description="Nunca compartiremos su correo electrónico con nadie más." type="email" id="email" name="email" placeholder="Ingresa tu email" required />
            <Input labelText="Name" type="name" id="name" name="name" placeholder="Ingresa tu name" required />
            <Input labelText="Phone" type="phone" id="phone" name="phone" placeholder="Ingresa tu phone" required />

            <Button text="Finalizar compra" type="submit" />
        </form>
    )
}

export default CheckoutForm
