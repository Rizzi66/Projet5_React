import Logo_white from '../../assets/kasa_white.svg'
import './index.scss'

function Footer() {
  return (
    <footer className="footer">
      <img className="footer_logo" src={Logo_white} />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
