import Logo_white from '../../assets/kasa_white.svg'
import './index.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className="footer__logo" src={Logo_white} />
        <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
