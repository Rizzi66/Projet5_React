import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/kasa.svg'
import './index.scss'

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className='header__logo' src={Logo} />
      </Link>
      <nav className="header__nav">
        <NavLink to="/" className="header__link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="header__link">
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
