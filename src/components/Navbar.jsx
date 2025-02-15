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
                        {/* to do: renderizar todas las categorias que vienen de la api fake store api*/}
                        <li><Link to="category/beauty">beauty</Link></li>
                        <li><Link to="category/fragrances">fragrances</Link></li>
                        <li><Link to="category/furniture">furniture</Link></li>
                        <li><Link to="category/groceries">groceries</Link></li>
                    </ul>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}

export default Navbar