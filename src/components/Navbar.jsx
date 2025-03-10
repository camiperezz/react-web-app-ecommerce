import { CartWidget } from './CartWidget'
import { Link } from 'react-router'

function Navbar () {

    return (
        <header>
            <div className='header-container'>

                <Link to={'/'}>
                    <img src="/logo.png" alt="Logo" />
                </Link>

                <nav className="navbar">
                    <ul className="nav-links">
                        <li><Link to="category/mujer">mujer</Link></li>
                        <li><Link to="category/unisex">unisex</Link></li>
                        <li><Link to="category/hombre">hombre</Link></li>
                        <li><Link to="category/infantil">infantil</Link></li>
                    </ul>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}

export default Navbar