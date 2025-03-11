import { CartWidget } from './CartWidget'
import { Link, NavLink } from 'react-router'

function Navbar () {

    return (
        <header>
            <div className='header-container'>

                <Link to={'/'}>
                    <img src="/logo.png" alt="Logo" />
                </Link>

                <nav className="navbar">
                    <ul className="nav-links">
                        <li>
                            <NavLink to="category/mujer"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "nav-link-active" : ""
                                }
                            >
                                mujer
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="category/unisex"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "nav-link-active" : ""
                                }
                            >
                                unisex
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="category/hombre"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "nav-link-active" : ""
                                }
                            >
                                hombre
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="category/infantil"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "nav-link-active" : ""
                                }
                            >
                                infantil
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                

                <CartWidget />
            </div>
        </header>
    )
}

export default Navbar