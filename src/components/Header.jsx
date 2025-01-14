import styles from './Header.module.scss';
import Logo from '../../../assets/images/logo_kasa.svg'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <NavLink to="/">
                <img src={Logo} alt='Kasa, la location d’appartements entre particuliers en France'/>
            </NavLink>
            <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? styles['active-link'] : '')}>Accueil</NavLink>
                <NavLink to="/About" className={({ isActive }) => (isActive ? styles['active-link'] : '')}>A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header