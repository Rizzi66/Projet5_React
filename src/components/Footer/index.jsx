import Logo from '../../assets/kasa_logo.svg'
import './index.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className="footer__logo" src={Logo} alt="Logo Kasa" />
        <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
