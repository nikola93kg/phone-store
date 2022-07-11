import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assets/img/logo.webp'

function Navbar() {
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Navbar