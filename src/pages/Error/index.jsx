import { Link } from 'react-router-dom'
import './index.scss'

function Error() {
  return (
    <main>
      <section className="error">
        <h1 className="error__404">404</h1>
        <h2 className="error__text">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link to="/" className="error__link">
          Retourner sur la page d’accueil
        </Link>
      </section>
    </main>
  )
}

export default Error
