import { Link } from 'react-router-dom'
import Logo from '../../assets/kasa.svg'
import './index.scss'

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} />
      </Link>
      <nav className="header__nav">
        <Link to="/" className="header__link">
          Accueil
        </Link>
        <Link to="/about" className="header__link">
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
