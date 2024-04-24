import { Link } from 'react-router-dom'
import './index.scss'

function Card({ picture, title, id }) {
  return (
    <Link to={"/location/" + id} className="card">
      <div className='card__background'></div>
      <img className='card__image' src={picture} alt={title} />
      <h2 className="card__title">{title}</h2>
    </Link>
  )
}

export default Card
