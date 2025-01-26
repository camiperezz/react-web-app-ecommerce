import { CartWidget } from './CartWidget'

export const Navbar = () => {

    return (
        <header>
            <div className='header__container container'>

                <a href="#">
                    <img src="/logo.png" alt="Logo" />
                </a>

                <nav className="navbar">
                    <ul className="nav-links">
                        <li><a href="#">Mujeres</a></li>
                        <li><a href="#">Hombres</a></li>
                        <li><a href="#">Niños</a></li>
                        <li><a href="#">Adolescentes</a></li>
                    </ul>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}
