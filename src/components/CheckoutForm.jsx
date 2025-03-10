import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useCart } from '../context/cartContext'
import { serverTimestamp } from 'firebase/firestore'
import { createOrder } from '../firebase/db'
import { useNavigate } from 'react-router'

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

        console.log("cart en checkout:")
        console.log(cart)

        const order = {
            items: cart,
            user: { userName: name, email, phone },
            time: serverTimestamp(),
            total: getTotal()
        }

        console.log("order")
        console.log(order)

        const orderId = await createOrder(order)

        // to do: clearCart()

        MySwal.fire({
            title: <p>Gracias por tu compra</p>,
            text: `El ID de tu orden es ${orderId}`
        }).then(() => navigate('/'))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
                <p>We will never share your email with anyone else.</p>
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="name" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="phone" id="phone" name="phone" placeholder="Enter your phone" required />
            </div>

            <button type="submit">Finalizar compra</button>
        </form>
    )
}

export default CheckoutForm
