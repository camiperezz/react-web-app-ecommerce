import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useCart } from '../context/cartContext'
import { serverTimestamp } from 'firebase/firestore'
import { createOrder } from '../firebase/db'
import { useNavigate } from 'react-router'
import Input from './Input'
import Button from './Button'

function CheckoutForm () {
    const { cart, getTotal } = useCart()
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)    

    const handleSubmit = async (e) => {
        e.preventDefault() // evitar recargar la pagina

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

        // to do: clearCart()

        MySwal.fire({
            title: <p>Gracias por tu compra</p>,
            text: `El ID de tu orden es ${orderId}`
        }).then(() => navigate('/'))
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input labelText="Email address" description="We will never share your email with anyone else." type="email" id="email" name="email" placeholder="Enter your email" required />
            <Input labelText="Name" type="name" id="name" name="name" placeholder="Enter your name" required />
            <Input labelText="Phone" type="phone" id="phone" name="phone" placeholder="Enter your phone" required />

            <Button text="Finalizar compra" type="submit" />
        </form>
    )
}

export default CheckoutForm
